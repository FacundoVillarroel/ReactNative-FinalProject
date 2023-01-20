import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 

import { styles } from './styles';
import { COLORS } from '../../constants/colors';

const RoundButton = ({onPress, style, type, fav}) => {
  return (
    <TouchableOpacity style={{...styles.container, ...style}} onPress={onPress}>
      {type === "delete"
        ? <Ionicons name="trash" size={20} color={COLORS.danger}/>
        : type === "fav" 
          ? <Ionicons name={fav ? "heart" : "heart-outline"} size={20} color={COLORS.danger}/>
          :<Text style={styles.text}>X</Text>
      }
    </TouchableOpacity>
  )
}

export default RoundButton