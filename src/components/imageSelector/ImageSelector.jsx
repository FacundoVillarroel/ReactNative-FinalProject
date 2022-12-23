import { TouchableOpacity, Text, Alert, View, Image } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from "expo-image-picker";

import { styles } from './styles';

const ImageSelector = ({text, onImagePicked, style}) => {
  const [pickedUrl, setPickedUrl] = useState(null)

  const onHandleImage = async () => {
    const isCameraPermissions = await verifyPermissions();
    if (!isCameraPermissions) return

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing:true,
      aspect: [4,4],
      quality:1,
    })

    if (!image.canceled) {
      setPickedUrl(image.assets[0].uri)
      onImagePicked(image.assets[0].uri)
    }
  }

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if ( status !== "granted"){
      Alert.alert(
        "Permisos insuficientes",
        "Necesitas dar permisos para usar la cámara", [{text:"Ok"}]
      )
      return false
    }
    return true 
  }

  return (
    <>
    {pickedUrl ? (
      <View style={{...styles.container, ...style}}>
        <Image style={styles.image} source={{uri: pickedUrl}}/>
      </View> ) : (
      <TouchableOpacity style={{...styles.container, ...style}} onPress={onHandleImage}>
        <Text style={styles.text}> {text} </Text>
      </TouchableOpacity> )
      }
    </>
  )
}

export default ImageSelector