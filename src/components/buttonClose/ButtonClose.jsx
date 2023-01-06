import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 

import { styles } from './styles';
import { COLORS } from '../../constants/colors';

const ButtonClose = ({onPress, style, isDeleteAllowed}) => {
  return (
    <TouchableOpacity style={{...styles.container, ...style}} onPress={onPress}>
      {isDeleteAllowed 
        ? <Ionicons name="trash" size={20} color={COLORS.danger}/>
        : <Text style={styles.text}>X</Text>
      }
      
    </TouchableOpacity>
  )
}

export default ButtonClose