import { View, Text, Image } from 'react-native';
import React from 'react';
import dogCat  from "../../../assets/dogCat.png";

import { styles } from './styles';

const NotFoundCard = ({error, message = ""}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>!Ups¡</Text>
      <Image  source={dogCat} style={styles.image} />
      <Text style={styles.message}>{error}</Text>
      {message ? <Text style={styles.subMessage}>{message}</Text> : null}
    </View>
  )
}

export default NotFoundCard