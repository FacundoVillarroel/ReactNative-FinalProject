import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

import { styles } from './styles';

const ButtonClose = ({onPress, style}) => {
  return (
    <TouchableOpacity style={{...styles.container, ...style}} onPress={onPress}>
      <Text style={styles.text}>X</Text>
    </TouchableOpacity>
  )
}

export default ButtonClose