import React from 'react';
import {AuthProvider} from './AuthContext';

// * Combine all providers
const providers = [AuthProvider];
const AppContextProvider = ({children}: {children: JSX.Element}) => {
  return providers.reduceRight((acc, Comp) => {
    return <Comp>{acc}</Comp>;
  }, children);
};

export default AppContextProvider;
