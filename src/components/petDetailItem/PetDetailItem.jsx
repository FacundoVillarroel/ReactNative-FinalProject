import { View, Text } from 'react-native';
import React from 'react';

import { styles } from './styles';

const PetDetailItem = ({description, text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}:</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default PetDetailItem