import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import { styles } from './styles';

const PetDetail = () => {
  const pet = useSelector((state) => state.pets.selected)

  return (
    <View>
      <Text>PetDetail</Text>
    </View>
  )
}

export default PetDetail