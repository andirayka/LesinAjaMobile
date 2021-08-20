import React, {FC, useContext, useEffect, useState} from 'react';
import {
  Account,
  AdminLogin,
  GeneralLogin,
  Home,
  Les,
  Settings,
  Splash,
} from '@screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {getLocalStorage} from '@utils';
import {localStorageKey} from '@constants';
import {AuthContext} from '@context/AuthContext';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
// Main router fo the App
const AppRouter: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {userRole, setUserRole} = useContext(AuthContext);

  useEffect(() => {
    // Check data
    getLocalStorage(localStorageKey.userRole).then(res => {
      if (res) {
        setUserRole(res);
      }
      setIsLoading(false);
    });
  }, [userRole]);

  // When checking data, show splash screen
  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {/* Authentication Stack */}
      {!userRole && (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="GeneralLogin" component={GeneralLogin} />
          <Stack.Screen name="AdminLogin" component={AdminLogin} />
        </Stack.Navigator>
      )}
      {/* Parent Tabs */}
      {userRole === 'parent' && (
        <Tab.Navigator initialRouteName="SettingsStack">
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Les" component={Les} />
          <Tab.Screen name="SettingsStack" component={SettingsStack} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

const SettingsStack: FC<any> = ({props}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
};

export default AppRouter;
