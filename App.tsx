// react-native-gesture-handler should be at the top and there's nothing else before it
import 'react-native-gesture-handler';

import React, {FC} from 'react';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppRouter from '@routes';

// to indicate that inactive screens should be detached from the view hierarchy to save memory
enableScreens();

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <AppRouter />
    </SafeAreaProvider>
  );
};

export default App;
