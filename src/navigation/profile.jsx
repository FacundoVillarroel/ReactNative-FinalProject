import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { COLORS } from "../constants/colors";

import { Profile, MyPosts, ModifyProfile } from "../screens/";

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
          headerStyle:{
            backgroundColor: COLORS.primary,
          },
          title:"Mis Publicaciones"
        }}
      />
        <Stack.Screen
          name="ModifyProfile"
          component={ModifyProfile}
          options={{
            headerShown:true,
            title:"Editar Perfil"
          }}
        />
    </Stack.Navigator>
  )
}

export default ProfileNavigator