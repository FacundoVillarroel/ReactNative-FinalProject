import { Platform } from 'react-native';
import { URL_GEOCODING } from '../../constants/maps';

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