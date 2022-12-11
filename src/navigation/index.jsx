import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import Tabs from "./tabs";

const AppNavigator = () => {
  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default AppNavigator

import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
