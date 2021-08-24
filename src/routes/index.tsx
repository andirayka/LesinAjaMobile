import React, {FC, useContext, useEffect, useState} from 'react';
import {
  Account,
  AdminLogin,
  EditStudent,
  GeneralLogin,
  Home,
  Les,
  ListStudents,
  Settings,
  Splash,
} from '@screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {getLocalStorage} from '@utils';
import {lsKey} from '@constants';
import {AuthContext} from '@context/AuthContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
// Main router fo the App
const AppRouter: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {userRole, setUserRole} = useContext(AuthContext);

  useEffect(() => {
    // Check data
    getLocalStorage(lsKey.userRole).then(res => {
      if (res) {
        setUserRole(res);
      }
      setIsLoading(false);
    });
  }, []);

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
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="ListStudents" component={ListStudents} />
          <Stack.Screen name="EditStudent" component={EditStudent} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const MainTabs: FC<any> = ({props}) => {
  return (
    <Tab.Navigator
      initialRouteName="Les"
      barStyle={{backgroundColor: '#FCD34D'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Les"
        component={Les}
        options={{
          tabBarLabel: 'Les',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="book-open-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Akun',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRouter;
