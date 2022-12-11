import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./home";
import PostNavigator from "./post";
import ProfileNavigator from "./profile";
import { COLORS } from "../constants/colors";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return(
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign:"center",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          title:"Home"
        }}
      />
      <BottomTab.Screen
        name="PostNavigator"
        component={PostNavigator}
        options={{
          title:"Post"
        }}
      />
      <BottomTab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          title:"Profile"
        }}
      />
    </BottomTab.Navigator>
  )
}

export default Tabs