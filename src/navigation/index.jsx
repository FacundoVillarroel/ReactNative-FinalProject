import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";

import Tabs from "./tabs";
import Auth from "./auth";

const AppNavigator = () => {
  const userId = useSelector(state => state.auth.userId)
  
  return(
    <NavigationContainer>
      {userId ? <Tabs /> : <Auth/>}
    </NavigationContainer>
  )
}

export default AppNavigator
