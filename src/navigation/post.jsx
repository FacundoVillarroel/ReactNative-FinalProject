import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { COLORS } from "../constants/colors";

import { Post, NewLostPet, NewFoundPet, NewAdoptionPet, Maps } from "../screens";

const Stack = createNativeStackNavigator();

const PostNavigator = () => {
  return(
    <Stack.Navigator
    initialRouteName="Post"
    screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen
        name="Post"
        component={Post}
      />
      <Stack.Screen
        name="NewLostPet"
        component={NewLostPet}
      />
      <Stack.Screen
        name="NewFoundPet"
        component={NewFoundPet}
      />
      <Stack.Screen
        name="NewAdoptionPet"
        component={NewAdoptionPet}
      />
      <Stack.Screen
        name="Maps"
        component={Maps}
        options={{
          headerShown:true,
          statusBarColor:COLORS.primary,
          headerStyle:{
            backgroundColor: COLORS.primary,
          },
        }}
      />
    </Stack.Navigator>
  )
}

export default PostNavigator