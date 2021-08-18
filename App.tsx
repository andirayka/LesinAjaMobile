// react-native-gesture-handler should be at the top and there's nothing else before it
import 'react-native-gesture-handler';

import React, {FC} from 'react';
// import {InitialLoader} from '@screens';
import {enableScreens} from 'react-native-screens';

// to indicate that inactive screens should be detached from the view hierarchy to save memory
enableScreens();

const App: FC = () => {
  // return <InitialLoader />;
};

export default App;
