import { View, Text, FlatList, ImageBackground, TouchableOpacity, Image } from 'react-native';
import React, { useRef, useState } from 'react';

import { styles } from './styles';

const ViewConfigRef = { viewAreaCoveragePercentThreshold:95 }

const Carousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
    <View>
      <Image source={{uri:item}} style={styles.image}/>
    </View>
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
            style={[styles.circle, {backgroundColor: index === currentIndex ? "black" : "grey"}]}
            onPress={() => scrollToIndex(index)}
          >

          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Carousel