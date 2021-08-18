import {wait} from '@utils';
import React, {FC, useEffect, useState} from 'react';
import {Splash} from '@screens';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';

const AppRouter: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check data
    wait(1000).then(() => {
      setIsLoading(false);
    });
  }, []);

  // When checking data, show splash screen
  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default AppRouter;
