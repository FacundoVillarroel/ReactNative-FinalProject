import React,{ useEffect, useState} from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from "react-redux"; 

import { styles } from './styles';
import { PetCard, ButtonFilter, NotFoundCard } from "../../components"; 
import { formatDate } from "../../utils";
import { selectCategory } from '../../store/category.slice';
import { selectStatus } from "../../store/status.slice";
import { filterPets, selectPet, getPets } from '../../store/pet.slice';
import { COLORS } from '../../constants/colors';

const PetsList = ({ navigation }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const categorySelected = useSelector((state) => state.category.selected);
  const statusSelected = useSelector((state) => state.status.selected);

  const pets = useSelector((state) => state.pet.pets);
  const filteredPets = useSelector((state) => state.pet.filteredPets);

  useEffect(() => { 
    dispatch(getPets(setLoading)) 
    if (categorySelected || statusSelected){
      dispatch(filterPets({categoryId:categorySelected?.id, statusId:statusSelected?.id}))
    }
  },[categorySelected, statusSelected])
  
  const onSelectPet = (id) => {
    dispatch(selectPet(id))
    navigation.navigate("PetDetail")
  }

  const onSelectCategory= (id) => {
    dispatch(selectCategory(id))
  }

  const onSelectStatus= (id) => {
    dispatch(selectStatus(id))
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

  const petsToShow = () => {
    if (!categorySelected && !statusSelected) return pets
    return filteredPets
  }

  return (
    <View style={styles.container}>
      {loading  
      ? 
        <View style={styles.activityContainer}> 
          <ActivityIndicator size={50} color={COLORS.primary}/> 
        </View> 
      : 
        <>
          <ButtonFilter onSelectCategory={onSelectCategory} onSelectStatus={onSelectStatus} />
          {petsToShow().length === 0 
          ? <NotFoundCard error={"No hay mascotas que coincidan con tu búsqueda"} message="Prueba aplicando otros filtros"/>
          : <FlatList
              style={styles.flatList}
              data={petsToShow()}
              renderItem={renderItem}
              numColumns={2}
              keyExtractor= {item => item.id.toString()}
            />
          }
        </>}
    </View>
  )
}

export default PetsList