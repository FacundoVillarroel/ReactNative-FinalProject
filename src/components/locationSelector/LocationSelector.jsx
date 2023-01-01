import { View, TouchableOpacity, Alert, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from "expo-location";
import MapPreview from "../mapPreview/MapPreview";
import { useNavigation, useRoute } from "@react-navigation/native";

import { styles } from "./styles";
import { getGeocoding, verifyPermissionsGps } from '../../utils';

const LocationSelector = ({ onLocationPicker, prevRoute}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [pickedLocation, setPickedLocation] = useState(null);
  const mapLocation = route?.params?.mapLocation;

  const onHandleGetLocation = async () => {
    const isLocationPermission = await verifyPermissionsGps();
    if (!isLocationPermission) return

    const location = await Location.getCurrentPositionAsync({
      timeout:5000,
    });

    const {latitude, longitude} = location.coords

    const address = await getGeocoding(latitude, longitude)
    
    setPickedLocation({address, coords:{lat: latitude, lng: longitude}})    
    onLocationPicker({address, coords:{lat: latitude, lng: longitude}}, "lossZone")
  }

  useEffect(() => {
    if (!pickedLocation){
      onHandleGetLocation()
    }
    if (mapLocation) {
      setPickedLocation(mapLocation)
      onLocationPicker(mapLocation, "lossZone")
    }
  }, [mapLocation, pickedLocation])

  const onHandlePickLocation = async () => {
    const isLocationPermissionGranted = await verifyPermissionsGps();

    if (!isLocationPermissionGranted) return;

    navigation.navigate("Maps", {pickedLocation, prevRoute});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.mapContainer} onPress={onHandlePickLocation}> 
        <MapPreview location={pickedLocation?.coords} style={styles.mapPreview}>
            <View style={styles.btn}>
              <Text style={styles.touchableText}>Elegir en el mapa</Text>
            </View>
        </MapPreview>
      </TouchableOpacity>
    </View>
  )
}

export default LocationSelector