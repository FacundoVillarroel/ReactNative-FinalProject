import { View, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { NotFoundCard, PetCard } from '../../components';
import { formatDate } from '../../utils';

import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { filterByAuthor, selectPet } from '../../store/pet.slice';


const MyPosts = ({navigation}) => {
  const user = useSelector(state => state.user.currentUser) || {};
  const { userId } = user || {};
  const posts = useSelector(state => state.pet.filteredByAuthor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterByAuthor(userId));
  }, [filterByAuthor])
  

  const onSelectPet = (id) => {
    dispatch(selectPet(id))
    navigation.navigate("Home",{screen:"PetDetail"})
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
      {posts.length === 0 
      ? <NotFoundCard error={"No tienes ninguna publicación"} message='Puedes publicar en la seccion "Anunciar"'/>
      : <FlatList
          style={styles.flatList}
          data={posts}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor= {item => item.id.toString()}
        />
      }
    </View>
  )
}

export default MyPosts