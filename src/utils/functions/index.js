import { Platform } from 'react-native';
import { URL_GEOCODING } from '../../constants/maps';
import * as ImagePicker from "expo-image-picker";
import { Alert } from 'react-native';
import { firebase } from "../../constants/firebase/config";

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

export const getGeocoding = async (latitude, longitude) => {
  const response = await fetch(URL_GEOCODING(latitude, longitude))
  if (!response.ok) throw new Error("no se ha podido conectar con el servicio, inténtalo nuevamente mas tarde");
  
  const data = await response.json()
  if (!data.results) throw new Error("No se ha podido encontrar la dirección seleccionada");

  return data.results[0].formatted_address
}

export const verifyPermissionsMediaLibrary = async () => {
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

export const verifyPermissionsCamera = async () => {
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

export const uploadImage = async (pickedUrl) => {
  const response = await fetch(pickedUrl);
  const blob = await response.blob()
  const fileName = pickedUrl.substring(pickedUrl.lastIndexOf("/")+1);
  let ref = firebase.storage().ref().child(fileName).put(blob);
  try {
    await ref;
    let url = await firebase.storage().ref(fileName).getDownloadURL()
    return url
  } catch (err) {
    console.log(err);
  }

  Alert.alert("Foto subida exitosamente !");
}