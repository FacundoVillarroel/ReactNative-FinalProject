import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'; 

import { PetDetailItem, ButtonClose, MapPreview } from '../../components';
import { styles } from './styles';
import { COLORS } from '../../constants/colors';

const PetDetail = ({navigation}) => {
  const pet = useSelector((state) => state.pet.selected)

  const { image, name, description, categoryId, breed, gender, hair, eyes, chip, collar, date, lossZone, contact, isLost } = pet

  const onClose = () => {
    return navigation.navigate("PetsList")
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ButtonClose onPress={onClose}/>
        <Text style={styles.isLost}>{isLost ? "Perdid": "Encontrad"}{gender === "macho" ? "o" : "a"}</Text>
        <Image style={styles.image} source={{uri:image[0]}} resizeMode="stretch" />
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
        <PetDetailItem description="Se perdió el" text={date} />
        <View style={styles.lossZoneContainer}>
          <View style={styles.lossZoneTitleContainer}>
            <Ionicons name="location" size={18} color={COLORS.secondary} />
            <Text style={styles.lossZoneTitle}>{lossZone.address}</Text>
          </View>
          <MapPreview location={lossZone.coords}/>
        </View>
      </View>
      <Text style={styles.contact}>Contacto: {contact}</Text>
    </ScrollView>
  )
}

export default PetDetail