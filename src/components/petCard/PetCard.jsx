import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { default as Card } from "../card/Card";

import { styles } from './styles';
import { COLORS } from '../../constants/colors';

const PetCard = ({name, image, status, gender, date, lossLocation, id, onSelect}) => {
  const color = status === "lost" ? COLORS.danger : status === "found" ? COLORS.success : COLORS.light 
  let statusText = "En adopción"
  if (status === "lost") {
    gender === "hembra" ? statusText = "Perdida" : statusText = "Perdido"
  } else if( status === "found") {
    gender === "hembra" ? statusText = "Encontrada" : statusText = "Encontrado"
  }
  return (
      <Card>
        <TouchableOpacity style={styles.container} onPress={() => onSelect(id)}>
          <View style={{...styles.statusContainer, backgroundColor:color}}>
            <Text style={styles.status}>{statusText}</Text>
          </View>
          <Image style={styles.image} source={{uri:image[0]}} resizeMode="stretch"/>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.lossLocation}>{lossLocation}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Card>
  )
}

export default PetCard