import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import { PetDetailItem } from '../../components';
import { styles } from './styles';
import { formatDate } from "../../utils";

const PetDetail = () => {
  const pet = useSelector((state) => state.pets.selected)

  const { image, name, description, categoryId, breed, gender, hair, eyes, chip, collar, date, lossLocation, contact, isLost } = pet

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri:image}}/>
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
    </ScrollView>
  )
}

export default PetDetail