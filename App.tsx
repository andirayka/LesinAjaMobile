// react-native-gesture-handler should be at the top and there's nothing else before it
import 'react-native-gesture-handler';

import React, {FC} from 'react';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import AppRouter from '@routes';
import AppContextProvider from '@context';

// to indicate that inactive screens should be detached from the view hierarchy to save memory
enableScreens();

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <AppContextProvider>
        <PaperProvider>
          <AppRouter />
        </PaperProvider>
      </AppContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
