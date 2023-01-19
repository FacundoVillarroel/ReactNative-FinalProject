import { View, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NotFoundCard, PetCard } from '../../components';
import { formatDate } from '../../utils';
import { COLORS } from '../../constants/colors';

import { styles } from "./styles";
import { useDispatch, useSelector } from 'react-redux';
import { loadFavorites } from '../../store/favorites.slice';
import { selectPet } from '../../store/pet.slice';

const FavPosts = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const pets = useSelector(state => state.favorites.favoritesList);

  useEffect(() => {
    dispatch(loadFavorites(setLoading))
  }, [dispatch])
  

  const onSelectPet = (id) => {
    dispatch(selectPet(id))
    navigation.navigate("PetDetail")
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
      {loading  
      ? 
        <View style={styles.activityContainer}> 
          <ActivityIndicator size={50} color={COLORS.primary}/> 
        </View> 
      : 
        <>
          {pets.length === 0 
          ? <NotFoundCard error={"No tienes anuncios guardados"} message="Guarda anuncios de tu interés con el botón del corazón en la esquina superior derecha de cada publicación "/>
          : <FlatList
              style={styles.flatList}
              data={pets}
              renderItem={renderItem}
              numColumns={2}
              keyExtractor= {item => item.id.toString()}
            />
          }
        </>}
    </View>
  )
}

export default FavPosts