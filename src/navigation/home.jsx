import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Categories, PetDetail } from "../screens/";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator();

const CategoriesNavigator = () => {
  return(
    <Stack.Navigator
    initialRouteName="Categories"
    screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen
        name="Categories"
        component={Categories}
      />
      <Stack.Screen
        name="PetDetail"
        component={PetDetail}
      />
    </Stack.Navigator>
  )
}

export default CategoriesNavigator