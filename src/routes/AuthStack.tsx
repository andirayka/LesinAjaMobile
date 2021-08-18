import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AdminLogin, GeneralLogin} from '@screens';

const Stack = createStackNavigator();

// Stack for auth flows
export const AuthStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GeneralLogin" component={GeneralLogin} />
      <Stack.Screen name="AdminLogin" component={AdminLogin} />
    </Stack.Navigator>
  );
};
