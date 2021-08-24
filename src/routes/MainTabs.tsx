import React, {FC} from 'react';
import {Home, Les, Settings} from '@screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MainTabParamList} from './RouteTypes';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const MainTab = createMaterialBottomTabNavigator<MainTabParamList>();
export const MainTabs: FC = () => {
  return (
    <MainTab.Navigator
      initialRouteName="Les"
      barStyle={{backgroundColor: '#FCD34D'}}>
      <MainTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <MainTab.Screen
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
      <MainTab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Akun',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
