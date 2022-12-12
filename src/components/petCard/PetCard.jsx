import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Card } from "../index"

import { styles } from './styles';

const PetCard = ({name, image, date, lossLocation, id, onSelect }) => {

  
  return (
      <Card>
    <TouchableOpacity style={styles.container} onPress={() => onSelect(id)}>
        <Image style={styles.image} source={{uri:image}} resizeMode="stretch"/>
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