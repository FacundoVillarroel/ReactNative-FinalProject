import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Home } from "../screens/";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return(
    <Stack.Navigator
    initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator