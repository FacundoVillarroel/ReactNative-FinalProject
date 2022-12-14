import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import { PetDetailItem, ButtonClose } from '../../components';
import { styles } from './styles';
import { formatDate } from "../../utils";

const PetDetail = ({navigation}) => {
  const pet = useSelector((state) => state.pets.selected)

  const { image, name, description, categoryId, breed, gender, hair, eyes, chip, collar, date, lossLocation, contact, isLost } = pet

  const onClose = () => {
    return navigation.navigate("PetsList")
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ButtonClose onPress={onClose}/>
        <Text style={styles.isLost}>{isLost ? "Perdid": "Encontrad"}{gender === "macho" ? "o" : "a"}</Text>
        <Image style={styles.image} source={{uri:image}}/>
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
        <Text style={styles.date}>{formatDate(date)}</Text>
        <Text style={styles.lossLocation}>{lossLocation}</Text>
      </View>
      <Text style={styles.contact}>Contact: {contact}</Text>
    </ScrollView>
  )
}

export default PetDetail