import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

import { styles } from './styles';

const PhotoSelector = ({text, onPress, style}) => {
  return (
    <TouchableOpacity style={{...styles.container, ...style}} onPress={onPress}>
      <Text style={styles.text}> {text} </Text>
    </TouchableOpacity>
  )
}

export default PhotoSelector