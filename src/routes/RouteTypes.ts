import {StudentType} from '@constants';
import {NavigatorScreenParams} from '@react-navigation/native';

export type MainTabParamList = {
  Home: undefined;
  Les: undefined;
  Settings: undefined;
  LesTutor: undefined;
  Lowongan: undefined;
};

export type AdminDrawerParamList = {
  ListTutor: undefined;
  ListWalmur: undefined;
};

export type AppStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>;
  AdminDrawer: NavigatorScreenParams<AdminDrawerParamList>;
  Account: undefined;
  LoginAdmin: undefined;
  LoginGeneral: undefined;
  ListStudents: undefined;
  EditStudent: undefined | {item: StudentType};
  AddLes: undefined;
  DetailLes: undefined;
  DetailTutor: undefined;
  DetailPresensi: undefined;
  DetailLowongan: undefined;
  DetailLesTutor: undefined;
  DetailWalmur: undefined;
};
