import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Profile } from "../screens/";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return(
    <Stack.Navigator
    initialRouteName="Profile"
    screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  )
}

export default ProfileNavigator