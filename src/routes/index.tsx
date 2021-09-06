import React, {FC, useContext, useEffect, useState} from 'react';
import {
  Account,
  AddLes,
  LoginAdmin,
  DetailLes,
  DetailTutor,
  EditStudent,
  LoginGeneral,
  ListStudents,
  Splash,
  DetailPresensi,
  Lowongan,
  DetailLowongan,
} from '@screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {clearLocalStorage, getLocalStorage} from '@utils';
import {lsKey} from '@constants';
import {AuthContext} from '@context/AuthContext';
import {MainTabs} from './MainTabs';
import {AppStackParamList} from './RouteTypes';

const AppStack = createStackNavigator<AppStackParamList>();
// Main router fo the App
const AppRouter: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    state: {userRole},
    setUserRole,
  } = useContext(AuthContext);

  useEffect(() => {
    // Check data
    getLocalStorage(lsKey.userRole).then(res => {
      if (res) {
        setUserRole(res);
      }
      setIsLoading(false);
    });

    // clearLocalStorage();
  }, [setUserRole]);

  // When checking data, show splash screen
  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        {/* <AppStack.Screen name="Lowongan" component={Lowongan} />
        <AppStack.Screen name="DetailLowongan" component={DetailLowongan} /> */}
        {/* Authentication Stack */}
        {!userRole && (
          <>
            <AppStack.Screen name="LoginGeneral" component={LoginGeneral} />
            <AppStack.Screen name="LoginAdmin" component={LoginAdmin} />
          </>
        )}

        {/* Parent Stack */}
        {userRole === 'parent' && (
          <>
            <AppStack.Screen name="MainTabs" component={MainTabs} />
            <AppStack.Screen name="Account" component={Account} />
            <AppStack.Screen name="ListStudents" component={ListStudents} />
            <AppStack.Screen name="EditStudent" component={EditStudent} />
            <AppStack.Screen name="AddLes" component={AddLes} />
            <AppStack.Screen name="DetailLes" component={DetailLes} />
            <AppStack.Screen name="DetailTutor" component={DetailTutor} />
            <AppStack.Screen name="DetailPresensi" component={DetailPresensi} />
          </>
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
