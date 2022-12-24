import { TouchableOpacity, Text, Alert, View, Image } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from "expo-image-picker";
import Modal from '../modal/Modal';

import { styles } from './styles';

const ImageSelector = ({text, onImagePicked, style}) => {
  const [pickedUrl, setPickedUrl] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const onHandleImage = async (option) => {
    let image = null
    if ( option === "camera"){
      const isCameraPermissions = await verifyPermissionsCamera();
      if (!isCameraPermissions) return
  
      image = await ImagePicker.launchCameraAsync({
        allowsEditing:true,
        aspect: [4,4],
        quality:1,
      })
    } else {
        const isCameraPermissions = await verifyPermissionsMediaLibrary();
        if (!isCameraPermissions) return
    
        image = await ImagePicker.launchImageLibraryAsync({
          allowsEditing:true,
          aspect: [4,4],
          quality:1,
        })
      }

    if (!image.canceled) {
      setPickedUrl(image.assets[0].uri)
      onImagePicked(image.assets[0].uri)
    }
  }

  const verifyPermissionsCamera = async () => {
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

  const verifyPermissionsMediaLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if ( status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesitas dar permisos para utilizar la galeria", [{text:"Ok"}]
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
      <TouchableOpacity style={{...styles.container, ...style}} onPress={ () => setModalVisible(!modalVisible)}>
        <Text style={styles.text}> {text} </Text>
        <Modal setModalVisible={setModalVisible} modalVisible={modalVisible}  onPress={onHandleImage}/>
      </TouchableOpacity> )
      }
    </>
  )
}

export default ImageSelector