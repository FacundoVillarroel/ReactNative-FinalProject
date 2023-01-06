import { TouchableOpacity, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from "expo-image-picker";
import Modal from '../modal/Modal';
import { verifyPermissionsCamera, verifyPermissionsMediaLibrary } from '../../utils';

import { styles } from './styles';

const ImageSelector = ({children, onImagePicked, style, imageStyle, image = null, index}) => {
  const [pickedUrl, setPickedUrl] = useState(image)
  const [modalVisible, setModalVisible] = useState(false)

  const onHandleImage = async (option) => {
    let result = null
    if ( option === "camera"){
      const isCameraPermissions = await verifyPermissionsCamera();
      if (!isCameraPermissions) return
  
      result = await ImagePicker.launchCameraAsync({
        allowsEditing:true,
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
        aspect: [4,4],
        quality:.8,
      })
    } else if (option === "gallery") {
        const isCameraPermissions = await verifyPermissionsMediaLibrary();
        if (!isCameraPermissions) return
    
        result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing:true,
          mediaTypes:ImagePicker.MediaTypeOptions.Images,
          aspect: [4,4],
          quality:.8,
        })
      }

    if (!result.canceled) {
      setPickedUrl(result.assets[0].uri)
      onImagePicked({uri:result.assets[0].uri, index})
      setModalVisible(false)
    }
  }

  return (
    <>
    {
      <TouchableOpacity style={{...styles.container, ...style}} onPress={() => setModalVisible(!modalVisible)}>
        {pickedUrl ? <Image style={{...styles.image, ...imageStyle}} source={{uri: pickedUrl}}/> : children}
        <Modal 
          setModalVisible={setModalVisible} 
          modalVisible={modalVisible}  
          onPress={onHandleImage}
          title={"Elige una opción"}
          option1={{icon:"camera", text:"Cámara", action:"camera"}}
          option2={{icon:"image", text:"Galeria", action:"gallery"}}
        />
      </TouchableOpacity> 
      }
    </>
  )
}

export default ImageSelector