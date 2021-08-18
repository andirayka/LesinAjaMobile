import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginAdmin} from '@screens';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginAdmin" component={LoginAdmin} />
    </Stack.Navigator>
  );
};
