import React, {FC, useContext, useEffect, useState} from 'react';
import {
  Account,
  AddLes,
  AdminLogin,
  DetailLes,
  DetailTutor,
  EditStudent,
  GeneralLogin,
  ListStudents,
  Splash,
} from '@screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {getLocalStorage} from '@utils';
import {lsKey} from '@constants';
import {AuthContext} from '@context/AuthContext';
import {MainTabs} from './MainTabs';
import {AppStackParamList} from './RouteTypes';

const Stack = createStackNavigator();
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
  }, [setUserRole]);

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
        <AppStack.Navigator screenOptions={{headerShown: false}}>
          <AppStack.Screen name="MainTabs" component={MainTabs} />
          <AppStack.Screen name="Account" component={Account} />
          <AppStack.Screen name="ListStudents" component={ListStudents} />
          <AppStack.Screen name="EditStudent" component={EditStudent} />
          <AppStack.Screen name="AddLes" component={AddLes} />
          <AppStack.Screen name="DetailLes" component={DetailLes} />
          <AppStack.Screen name="DetailTutor" component={DetailTutor} />
        </AppStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppRouter;
