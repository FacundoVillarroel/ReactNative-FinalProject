import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { styles } from './styles';

const FullScreenImage = ({navigation, route}) => {
  const {image} = route.params
  
  return (
    <View style={styles.container}>
      <Image source={{uri:image}} style={styles.image} resizeMode="contain" />
      <TouchableOpacity style={styles.btnClose} onPress={() => {navigation.navigate("PetDetail")}}>
        <Text style={styles.btnCloseText}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FullScreenImage