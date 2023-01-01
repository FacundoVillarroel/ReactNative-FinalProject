import React,{ useEffect} from 'react';
import { FlatList, View } from 'react-native';
import { useSelector, useDispatch } from "react-redux"; 

import { styles } from './styles';
import { PetCard, ButtonFilter } from "../../components"; 
import { formatDate } from "../../utils";
import { selectCategory } from '../../store/category.slice';
import { filterPets, selectPet, getPets } from '../../store/pet.slice';

const PetsList = ({ navigation }) => {
  const dispatch = useDispatch();
  const categorySelected = useSelector((state) => state.category.selected)
  
  const pets = useSelector((state) => state.pet.pets);
  const filteredPets = useSelector((state) => state.pet.filteredPets)
  const categories = useSelector((state) => state.category.categories)
  
  useEffect(() => { 
    dispatch(getPets()) 
    if (categorySelected){
      dispatch(filterPets(categorySelected.id))
    }
  },[categorySelected])
  
  const onSelectPet = (id) => {
    dispatch(selectPet(id))
    navigation.navigate("PetDetail")
  }

  const onSelectCategory= (id) => {
    dispatch(selectCategory(id))
  }

  const renderItem = ( {item} ) => (
    <PetCard 
      name={item.name} 
      image={item.image} 
      status={item.status}
      gender={item.gender} 
      date={formatDate(item.date)}
      lossLocation={item.lossLocation}
      id={item.id}
      onSelect={onSelectPet}
    />
  )

  return (
    <View style={styles.container}>
      <ButtonFilter categories={categories} onSelect={onSelectCategory}/>
      <FlatList
        style={styles.flatList}
        data={filteredPets.length === 0 ? pets : filteredPets}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor= {item => item.id.toString()}
      />
    </View>
  )
}

export default PetsList