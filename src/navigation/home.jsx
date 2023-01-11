import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { PetsList, PetDetail, FullScreenImage } from "../screens/";

const Stack = createNativeStackNavigator();

const CategoriesNavigator = () => {
  return(
    <Stack.Navigator
    initialRouteName="PetsList"
    screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen
        name="PetsList"
        component={PetsList}
      />
      <Stack.Screen
        name="PetDetail"
        component={PetDetail}
      />
      <Stack.Screen
        name="FullScreenImage"
        component={FullScreenImage}
      />
    </Stack.Navigator>
  )
}

export default CategoriesNavigator