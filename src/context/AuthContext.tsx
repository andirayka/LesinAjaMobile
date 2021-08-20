import {localStorageKey} from '@constants';
import {setLocalStorage} from '@utils';
import React, {createContext, useEffect, useReducer} from 'react';
import {FC} from 'react';

type ContextType = {
  userToken?: string;
  // setUserToken?: (value: string) => void;
};

// * initial Value
type InitialValueType = {
  userRole: 'admin' | 'tutor' | 'parent';
};
const initialValue = {
  // userToken: '',
  userRole: '',
};

// * Reducer
type Actions = {
  type: 'SET_USER_TOKEN' | 'SET_USER_ROLE';
  userToken?: string;
  userRole?: string;
};
const reducer = (state: object, action: Actions) => {
  switch (action.type) {
    case 'SET_USER_TOKEN':
      return {...state, userToken: action.userToken};
    case 'SET_USER_ROLE':
      return {...state, userRole: action.userRole};

    default:
      return state;
  }
};

export const AuthContext = createContext<any>(initialValue);
export const AuthProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  // const setUserToken = (value: string) => {
  //   dispatch({type: 'SET_USER_TOKEN', userToken: value});
  // };

  const loginParent = async () => {
    await setLocalStorage(localStorageKey.userRole, 'parent');
    setUserRole('parent');
  };

  const setUserRole = (value: string) => {
    dispatch({type: 'SET_USER_ROLE', userRole: value});
  };

  // * Fungsi untuk logout
  // panggil firebase logout, lalu navigate ke login
  // const logout = async () => {};

  return (
    <AuthContext.Provider value={{...state, setUserRole, loginParent}}>
      {children}
    </AuthContext.Provider>
  );
};
