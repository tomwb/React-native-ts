import React, { createContext, useCallback, useReducer } from 'react';
import { User } from '../types';
import { AuthReducer, AuthReducerDefaultValues } from './reducers/auth_reducer';

export interface AuthContextData {
  loading: boolean;
  me: User | null;
  token: string | null;
  login: (params: { username: string; password: string }) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [dataReducer, dispatch] = useReducer(AuthReducer, {
    ...AuthReducerDefaultValues,
  });

  const login = useCallback(
    (params: { username: string; password: string }) => {
      dispatch({ type: 'SET_LOADING', loading: true });
      try {
        // const result = await api.post('/login', {
        //   document,
        // });
        console.log(params);
        dispatch({
          type: 'SET_ME',
          result: {
            data: {
              id: 1,
              name: 'Nome do camarada',
            },
            token: '12345',
          },
        });
      } catch (error) {
        // @TODO
      }
      dispatch({ type: 'SET_LOADING', loading: false });
      return [];
    },
    [],
  );

  const logout = useCallback(async () => {
    dispatch({ type: 'LOGOUT' });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...dataReducer,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
