import { Platform } from 'react-native';
import { URL_GEOCODING } from '../../constants/maps';
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import { firebase } from "../../constants/firebase/config";
import { URL_RESET_PASSWORD } from '../../constants/firebase';

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

export const verifyPermissionsGps = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if ( status !== "granted") {
      Alert.alert(
        "Permisos insuficientes para Publicar",
        "Necesitas dar permisos para acceder a la ubicación", [{text:"Ok."}]
      )
      return false
    }
    return true
  } catch (error) {
    console.log(error);
    return false
  }
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

export const resetPassword = async ( email, setLoading, navigation) => {
  try {
    setLoading(true);
    const response = await fetch(URL_RESET_PASSWORD, {
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        requestType:"PASSWORD_RESET",
        email
      })
    })

    const data = await response.json();
    setLoading(false);
    if (data.error?.message === "EMAIL_NOT_FOUND"){
      Alert.alert("Email inválido", "El email ingresado no se encuentra registrado", [{text:"Ok."}])
    } else if (data.email){
      Alert.alert("Email enviado correctamente", "Checkea tu bandeja de entrada o spam", [{text:"Ok."}])
      navigation.navigate("Login")
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}