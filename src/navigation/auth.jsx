import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Register, Login } from '../screens';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
    initialRouteName='Login'
    screenOptions={{
      headerTitleAlign:"center",
      headerShown:false,
    }}
    >
      <Stack.Screen
      name='Login'
      component={Login}
      />

      <Stack.Screen
      name='Register'
      component={Register}
      />
    </Stack.Navigator>
  )
}

export default Auth