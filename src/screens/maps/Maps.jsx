import IonicIcons from "@expo/vector-icons/Ionicons";
import React, { useLayoutEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getGeocoding } from "../../utils";

import { COLORS } from "../../constants/colors";
import { styles } from "./styles";

const Maps = ({ navigation, route }) => {
  const { pickedLocation } = route.params
  const [selectedLocation, setSelectedLocation] = useState(pickedLocation);
  const initialRegion = {
    latitude: selectedLocation.coords.lat,
    longitude: selectedLocation.coords.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onHandlePickLocation = async (event) => {
    const latitude = event.nativeEvent.coordinate.latitude
    const longitude = event.nativeEvent.coordinate.longitude
    const address= await getGeocoding(latitude, longitude)

    setSelectedLocation({
      address,
      coords:{
        lat: latitude,
        lng: longitude,
      }
    });
  };

  const onHandleSaveLocation = () => {
    if (selectedLocation) navigation.navigate("NewLostPet", { mapLocation: selectedLocation });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onHandleSaveLocation}>
          <IonicIcons name="md-save-sharp" size={24} color={COLORS.black} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, onHandleSaveLocation]);
  
  return (
    <MapView initialRegion={initialRegion} style={styles.container} onPress={onHandlePickLocation}>
      {selectedLocation && (
        <Marker
          title="Ubicacion seleccionada"
          coordinate={{
            latitude: selectedLocation.coords.lat,
            longitude: selectedLocation.coords.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Maps;
