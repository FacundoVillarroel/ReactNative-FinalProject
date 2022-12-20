import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Post, NewLostPet, NewFoundPet, NewAdoptionPet } from "../screens";

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
    </Stack.Navigator>
  )
}

export default PostNavigator