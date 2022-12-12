import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector, useDispatch } from "react-redux"; 

import { styles } from './styles';
import { PetCard } from "../../components"; 
import { formatDate } from "../../utils"
import { selectPet } from '../../store/actions';

const PetsList = ({ navigation }) => {
  const pets = useSelector((state) => state.pets.pets);
  const dispatch = useDispatch();

  const onSelect = (id) => {
    dispatch(selectPet(id))
    navigation.navigate("PetDetail")
  }

  const renderItem = ( {item} ) => (
    <PetCard 
      name={item.name} 
      image={item.image} 
      isLost={item.isLost}
      gender={item.gender} 
      date={formatDate(item.date)}
      lossLocation={item.lossLocation}
      id={item.id}
      onSelect={onSelect}
    />
  )
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={pets}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor= {item => item.id.toString()}
      />
    </View>
  )
}

export default PetsList