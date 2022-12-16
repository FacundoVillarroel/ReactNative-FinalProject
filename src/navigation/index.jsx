import { NavigationContainer } from "@react-navigation/native";
import React,{ useState } from "react";

import Tabs from "./tabs";
import Auth from "./auth";

const AppNavigator = () => {
  const {userId, setUserId} = useState(null)
  
  return(
    <NavigationContainer>
      {userId ? <Tabs /> : <Auth/>}
    </NavigationContainer>
  )
}

export default AppNavigator
