import { View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import * as Location from "expo-location";
import MapPreview from "../mapPreview/MapPreview";
import { URL_GEOCODING } from '../../constants/maps';

import { styles } from "./styles";

const LocationSelector = ({onLocationPicker}) => {
  const [pickedLocation, setPickedLocation] = useState(null)

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if ( status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesitas dar permisos para acceder a la ubicación", [{text:"Ok."}]
      )
      return false
    }
    return true
  }

  const onHandleGetLocation = async () => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return

    const location = await Location.getCurrentPositionAsync({
      timeout:5000,
    });

    const {latitude, longitude} = location.coords

    setPickedLocation({lat: latitude, lng: longitude})

    const response = await fetch(URL_GEOCODING(latitude, longitude))
      if (!response.ok) throw new Error("no se ha podido conectar con el servicio, inténtalo nuevamente mas tarde");
      
      const data = await response.json()
      if (!data.results) throw new Error("No se ha podido encontrar la dirección seleccionada");

      const address = data.results[0].formatted_address
    onLocationPicker({address, coords:{lat: latitude, lng: longitude}}, "lossZone")
  }

  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.mapPreview} onHandleGetLocation={onHandleGetLocation}>
        <TouchableOpacity style={styles.touchable} onPress={onHandleGetLocation}/>
      </MapPreview>
    </View>
  )
}

export default LocationSelector