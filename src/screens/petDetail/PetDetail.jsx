import { View, Text, ScrollView, TouchableOpacity, Linking, ActivityIndicator, Alert } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'; 

import { PetDetailItem, ButtonClose, MapPreview, Modal, Carousel } from '../../components';
import { styles } from './styles';
import { COLORS } from '../../constants/colors';
import { deletePet } from '../../store/pet.slice';
import { deleteImage } from '../../utils';
import { loadFavorites, saveFavorite } from '../../store/favorites.slice';

const PetDetail = ({navigation}) => {
  const dispatch = useDispatch();
  const pet = useSelector((state) => state.pet.selected);
  const favPets = useSelector((state) => state.favorites.favoritesList)
  const user = useSelector(state => state.user.currentUser);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false)
  const [fav, setFav] = useState(false)

  const { image: images, name, description, categoryId, breed, gender, hair, eyes, chip, collar, date, lossZone, contact, status } = pet

  const color = status === "lost" ? COLORS.danger : status === "found" ? COLORS.success : COLORS.light 
  let statusText = "En adopción"
  if (status === "lost") {
    gender === "hembra" ? statusText = "Perdida" : statusText = "Perdido"
  } else if( status === "found") {
    gender === "hembra" ? statusText = "Encontrada" : statusText = "Encontrado"
  }
  const onClose = () => {
    return navigation.navigate("PetsList")
  }

  const onContact = () => {
    Linking.openURL(`tel:${contact}`)
  }

  const onHandleDelete = async (option) => {
    if (option === "cancel") setModalVisible(!modalVisible)
    if (option === "delete") {
      dispatch(deletePet(pet.id, user.userId, setLoading))

      //Delete image from storage in firebase
      images.forEach(image => {
        const startIndex = image.lastIndexOf("/")+1
        const endIndex = image.lastIndexOf("?")
        const imageName = (image.substring(startIndex,endIndex))
        deleteImage(imageName)
      });
      setModalVisible(false)
      Alert.alert("Publicación eliminada", "Tu publicación fue eliminada correctamente")
      navigation.navigate("ProfileNavigator",{screen:"Profile"})
      // Reset Stack Navigator
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            { name: 'Home' },
            {
              name: 'ProfileNavigator',
            },
          ],
        })
      )
    }
  }

  const onFav = async () => {
    dispatch(saveFavorite(pet))
    setFav(!fav)
  }

  const isFavPet = () => {
    let favPetsId = favPets.map(item => item?.id)
    return favPetsId.includes(pet.id)
  }

  useEffect(() => {
    dispatch(loadFavorites(setLoading));
    setFav(isFavPet());
  },[dispatch])

  if(loading) {
    return(
      <View style={styles.activityContainer}> 
        <ActivityIndicator size={50} color={COLORS.primary}/> 
      </View> 
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ButtonClose onPress={onClose}/>
        {pet.authorId === user?.userId 
          ? <ButtonClose onPress={() => setModalVisible(!modalVisible)} style={styles.btnRight} type={"delete"}/> 
          : <ButtonClose onPress={onFav} style={styles.btnRight} type={"fav"} fav={fav}/>}
          <Modal 
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            onPress={onHandleDelete}
            title="¿Seguro desea eliminar esta publicación?"
            option1={{text:"Eliminar.",action:"delete",icon:"trash"}}
            option2={{text:"Cancelar.",action:"cancel",icon:"close"}}
          />
        <Text style={{...styles.status, color:color}}>{statusText}</Text>
        <Carousel images={images}/>
      </View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Detalles</Text>
        <PetDetailItem description="Categoria" text={categoryId}/>
        <PetDetailItem description="Raza" text={breed}/>
        <PetDetailItem description="Sexo" text={gender}/>
        <PetDetailItem description="Pelo" text={hair}/>
        <PetDetailItem description="Ojos" text={eyes}/>
        <PetDetailItem description="Chip" text={chip ? "Si" : "No"}/>
        <PetDetailItem description="Collar" text={collar ? "Si": "No"}/>
        <PetDetailItem description="Fecha" text={date} />
        <View style={styles.lossZoneContainer}>
          <View style={styles.lossZoneTitleContainer}>
            <Ionicons name="location" size={18} color={COLORS.secondary} />
            <Text style={styles.lossZoneTitle}>{lossZone.address}</Text>
          </View>
          <MapPreview location={lossZone.coords}/>
        </View>
      </View>
      <TouchableOpacity style={styles.contactConainer} onPress={onContact}>
        <Text style={styles.contact}>Contacto: {contact}</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default PetDetail