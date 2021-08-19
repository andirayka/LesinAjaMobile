import React, {createContext, useReducer} from 'react';
import {FC} from 'react';

type ContextType = {
  userToken?: string;
  setUserToken?: (value: string) => void;
};

// * initial Value
const initialValue: ContextType = {
  userToken: '',
};

// * Reducer
type Actions = {type: 'SET_USER_TOKEN'; userToken: string};
const reducer = (state: object, action: Actions) => {
  switch (action.type) {
    case 'SET_USER_TOKEN':
      return {...state, userToken: action.userToken};

    default:
      return state;
  }
};

export const AuthContext = createContext<ContextType>(initialValue);
export const AuthProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  // * Set ke reducer apakah sudah login atau belum
  const setUserToken = (value: string) => {
    dispatch({type: 'SET_USER_TOKEN', userToken: value});
  };

  // * Fungsi untuk logout
  // panggil firebase logout, lalu navigate ke login
  // const logout = async () => {};

  return (
    <AuthContext.Provider value={{...state, setUserToken}}>
      {children}
    </AuthContext.Provider>
  );
};
