import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Les, Lowongan} from '@screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContainer = createDrawerNavigator();

export const AdminDrawer = () => {
  return (
    <DrawerContainer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: '#000',
        drawerActiveBackgroundColor: '#FCD34D',
      }}>
      <DrawerContainer.Screen
        name="Beranda"
        component={Lowongan}
        options={{
          drawerIcon: () => <MaterialCommunityIcons name="home" size={26} />,
        }}
      />
      <DrawerContainer.Screen
        name="Data Master"
        component={Les}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="database" size={26} />
          ),
        }}
      />
      <DrawerContainer.Screen
        name="Daftar Tutor"
        component={Les}
        options={{
          drawerIcon: () => <MaterialCommunityIcons name="teach" size={26} />,
        }}
      />
      <DrawerContainer.Screen
        name="Daftar Wali Murid"
        component={Les}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="account-child" size={26} />
          ),
        }}
      />
      <DrawerContainer.Screen
        name="Pilihan Les"
        component={Les}
        options={{
          drawerIcon: () => <MaterialCommunityIcons name="school" size={26} />,
        }}
      />
      <DrawerContainer.Screen
        name="Riwayat Pembayaran"
        component={Les}
        options={{
          drawerIcon: () => <MaterialCommunityIcons name="wallet" size={26} />,
        }}
      />
      <DrawerContainer.Screen
        name="Laporan"
        component={Les}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="file-document" size={26} />
          ),
        }}
      />
      <DrawerContainer.Screen
        name="Keluar"
        component={Les}
        options={{
          drawerIcon: () => <MaterialCommunityIcons name="logout" size={26} />,
          drawerItemStyle: {
            marginTop: '120%',
          },
        }}
      />
    </DrawerContainer.Navigator>
  );
};

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
