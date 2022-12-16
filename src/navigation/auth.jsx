import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Register } from '../screens';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
    initialRouteName='Register'
    screenOptions={{
      headerTitleAlign:"center",
      headerShown:false,
    }}
    >
      <Stack.Screen
      name='Register'
      component={Register}
      />
    </Stack.Navigator>
  )
}

export default Auth