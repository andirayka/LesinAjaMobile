import {lsKey} from '@constants';
import {clearLocalStorage, setLocalStorage} from '@utils';
import React, {createContext, useCallback, useReducer} from 'react';
import {FC} from 'react';

type ContextType = {
  state: {
    userRole: '' | 'admin' | 'tutor' | 'parent';
  };
  loginParent: () => Promise<void>;
  setUserRole: (value: string) => void;
  logout: () => Promise<void>;
};

// * initial Value
const initialValue: ContextType = {
  state: {
    userRole: '',
  },
  loginParent: async () => {},
  setUserRole: () => {},
  logout: async () => {},
};

// * Reducer
type Actions = {
  type: 'SET_USER_TOKEN' | 'SET_USER_ROLE';
  userRole?: string;
};
const reducer = (state: any, action: Actions) => {
  switch (action.type) {
    case 'SET_USER_ROLE':
      return {...state, userRole: action.userRole};

    default:
      return state;
  }
};

export const AuthContext = createContext<ContextType>(initialValue);
export const AuthProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialValue.state);

  const setUserRole = useCallback((value: string) => {
    dispatch({type: 'SET_USER_ROLE', userRole: value});
  }, []);

  const loginParent = async () => {
    await setLocalStorage(lsKey.userRole, 'parent');
    dispatch({type: 'SET_USER_ROLE', userRole: 'parent'});
  };

  const logout = async () => {
    await clearLocalStorage();
    setUserRole('');
  };

  return (
    <AuthContext.Provider value={{state, setUserRole, loginParent, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
