import React, {FC} from 'react';
import {Home, LesTutor, Settings, Lowongan} from '@screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TutorTabParamList} from './RouteTypes';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const MainTab = createMaterialBottomTabNavigator<TutorTabParamList>();
export const TutorTabs: FC = () => {
  return (
    <MainTab.Navigator
      initialRouteName="Home"
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
        name="LesTutor"
        component={LesTutor}
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
        name="Lowongan"
        component={Lowongan}
        options={{
          tabBarLabel: 'Lowongan',
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
