import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { getUsersList } from '../store/user.slice';

import { Register, Login } from '../screens';
import { useDispatch } from 'react-redux';

const Stack = createNativeStackNavigator();

const Auth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersList())
  },[getUsersList])

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