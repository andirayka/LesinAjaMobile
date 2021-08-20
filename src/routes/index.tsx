import React, {FC, useContext, useEffect, useState} from 'react';
import {AdminLogin, GeneralLogin, Home, Splash} from '@screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {clearLocalStorage, getLocalStorage} from '@utils';
import {localStorageKey} from '@constants';
import {AuthContext} from '@context/AuthContext';

const Stack = createStackNavigator();
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
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* Authentication Stack */}
        {!userRole && (
          <>
            <Stack.Screen name="GeneralLogin" component={GeneralLogin} />
            <Stack.Screen name="AdminLogin" component={AdminLogin} />
          </>
        )}

        {/* Parent Stack */}
        {userRole === 'parent' && (
          <>
            <Stack.Screen name="Home" component={Home} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
