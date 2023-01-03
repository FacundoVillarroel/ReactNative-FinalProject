import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Profile, MyPosts } from "../screens/";

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
      <Stack.Screen
        name="MyPosts"
        component={MyPosts}
        options={{
          headerShown:true,
          title:"Mis Publicaciones"
        }}
      />
    </Stack.Navigator>
  )
}

export default ProfileNavigator