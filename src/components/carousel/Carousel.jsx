import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useRef, useState } from 'react';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const ViewConfigRef = { viewAreaCoveragePercentThreshold:95 }

const Carousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  
  let flatListRef = useRef();
  const onViewRef = useRef(({changed}) => {
    if(changed[0]) {
      setCurrentIndex(changed[0].index)
    }
  });

  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({animated:true, index})
  }

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate("FullScreenImage",{image:item})}>
      <Image source={{uri:item}} style={styles.image}/>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item,index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={(ref) => { flatListRef.current = ref }}
        style={ styles.carousel}
        viewabilityConfig={ViewConfigRef}
        onViewableItemsChanged={onViewRef.current}
      />
      <View style={styles.dotContainer}>
        {images.map(({},index) => (
          <TouchableOpacity 
            key={index.toString()} 
            style={index === currentIndex ? styles.circleSelected : styles.circle}
            onPress={() => scrollToIndex(index)}
          >

          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Carousel