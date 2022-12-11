import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./home";
import { COLORS } from "../constants/colors";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return(
    <BottomTab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerTitleAlign:"center",
      }}
    >
      <BottomTab.Screen
        name="home"
        component={HomeNavigator}
        options={{
          title:"Home"
        }}
      />
    </BottomTab.Navigator>
  )
}

export default Tabs