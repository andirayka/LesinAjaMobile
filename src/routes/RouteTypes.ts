import {NavigatorScreenParams} from '@react-navigation/native';

export type MainTabParamList = {
  Home: undefined;
  Les: undefined;
  Settings: undefined;
};
export type AppStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>;
  Account: undefined;
  LoginAdmin: undefined;
  LoginGeneral: undefined;
  ListStudents: undefined;
  EditStudent: undefined | {item: any};
  AddLes: undefined;
  DetailLes: undefined;
  DetailTutor: undefined;
  DetailPresensi: undefined;
};
