import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./home";
import PostNavigator from "./post";
import ProfileNavigator from "./profile";
import { COLORS } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../components";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return(
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle:{
          fontFamily:"MartinMono-Bold",
          fontSize:20
        },
        headerStyle:{
          backgroundColor:COLORS.primary,
        },
        headerTitleAlign:"center",
        headerTintColor:COLORS.white,
        tabBarActiveTintColor:COLORS.white,
        tabBarInactiveTintColor:COLORS.white,
        tabBarStyle:{
          backgroundColor:COLORS.primary,
          height:70,
          paddingBottom:10,
        },
        tabBarLabelStyle:{
          fontFamily:"MartinMono-Medium"
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          title:"Inicio",
          headerTitle: () => <Header title="Inicio" />,
          tabBarIcon:({ focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={25} color={COLORS.white}/>
          )
        }}
      />
      <BottomTab.Screen
        name="PostNavigator"
        component={PostNavigator}
        options={{
          headerTitle: () => <Header title="Anunciar" />,
          title:"Anunciar",
          tabBarIcon:({ focused }) => (
            <Ionicons name={focused ? "add-circle" : "add-circle-outline"} size={30} color={COLORS.white}/>
          )
        }}
      />
      <BottomTab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          title:"Perfil",
          headerTitle: () => <Header title="Perfil" />,
          tabBarIcon:({ focused }) => (
            <Ionicons name={focused ? "ios-person" : "ios-person-outline"} size={25} color={COLORS.white}/>
          )
        }}
      />
    </BottomTab.Navigator>
  )
}

export default Tabs