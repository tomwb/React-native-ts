import React, { createContext, useCallback, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ReactChildren, User } from '../types';
import { AuthReducer, AuthReducerDefaultValues } from './reducers/auth_reducer';

export interface AuthContextData {
  loading: boolean;
  me: User | null;
  token: string | null;
  login: (params: { username: string; password: string }) => void;
  logout: () => void;
  verifyToken: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<ReactChildren> = ({ children }) => {
  const [dataReducer, dispatch] = useReducer(AuthReducer, {
    ...AuthReducerDefaultValues,
  });

  const verifyToken = useCallback(async () => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const token = await AsyncStorage.getItem('@MyApp:token');
      if (token) {
        // const result = await api.post('/login', {
        //   document,
        // });
        dispatch({
          type: 'SET_ME',
          result: {
            data: {
              id: 1,
              name: 'Fulano de tal',
            },
            token,
          },
        });
      }
    } catch (error) {
      // @TODO
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  const login = useCallback(
    async (params: { username: string; password: string }) => {
      dispatch({ type: 'SET_LOADING', loading: true });
      try {
        // const result = await api.post('/login', {
        //   document,
        // });
        const token = '123456';
        dispatch({
          type: 'SET_ME',
          result: {
            data: {
              id: 1,
              name: 'Fulano de tal',
            },
            token,
          },
        });
        await AsyncStorage.setItem('@MyApp:token', token);
      } catch (error) {
        // @TODO
      }
      dispatch({ type: 'SET_LOADING', loading: false });
      return [];
    },
    [],
  );

  const logout = async () => {
    dispatch({ type: 'SET_LOADING', loading: true });
    await AsyncStorage.setItem('@MyApp:token', '');
    await AsyncStorage.clear();
    dispatch({ type: 'LOGOUT' });
    // @TODO
    dispatch({ type: 'SET_LOADING', loading: false });
  };

  return (
    <AuthContext.Provider
      value={{
        ...dataReducer,
        login,
        logout,
        verifyToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
