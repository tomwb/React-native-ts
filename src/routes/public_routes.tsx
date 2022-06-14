import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login';
import ForgotPassword from '../screens/forgot_password';
import { Layout } from '../components';
import { ThemeView } from '../styles/commons';

const Stack = createNativeStackNavigator();

const PublicRoutes: React.FC = () => {
  return (
    <ThemeView>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: 'transparent',
          },
        }}
      >
        <Layout>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </Stack.Navigator>
        </Layout>
      </NavigationContainer>
    </ThemeView>
  );
};

export default PublicRoutes;
