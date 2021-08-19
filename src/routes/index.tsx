import React, {FC, useContext, useEffect, useState} from 'react';
import {AdminLogin, GeneralLogin, Home, Splash} from '@screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {getLocalStorage} from '@utils';
import {localStorageKey} from '@constants';
import {AuthContext} from '@context/AuthContext';

const Stack = createStackNavigator();
// Main router fo the App
const AppRouter: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {userToken, setUserToken} = useContext(AuthContext);

  useEffect(() => {
    // Check data
    getLocalStorage(localStorageKey.userToken).then(res => {
      if (!res) {
        // setUserToken('coba');
      }
      setIsLoading(false);
    });
  }, [userToken]);

  // When checking data, show splash screen
  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <>
          <Stack.Screen name="GeneralLogin" component={GeneralLogin} />
          <Stack.Screen name="AdminLogin" component={AdminLogin} />
        </>

        <>
          <Stack.Screen name="Home" component={Home} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
