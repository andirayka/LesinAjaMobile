import {wait} from '@utils';
import React, {FC, useEffect, useState} from 'react';
import {Splash} from '@screens';

// When app is initially opened, check data and then load related screen
export const InitialLoader: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check data
    wait(1000).then(() => {
      setIsLoading(false);
    });
  }, []);

  // When checking data, show splash screen
  if (isLoading) {
  }
  return <Splash />;
};
