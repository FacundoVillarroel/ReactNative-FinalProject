import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Post } from "../screens";
import { COLORS } from "../constants/colors";

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
    </Stack.Navigator>
  )
}

export default PostNavigator