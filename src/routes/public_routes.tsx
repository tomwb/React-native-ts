import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login';
import ForgotPassword from '../screens/forgot_password';
import { Layout } from '../components';

const Stack = createNativeStackNavigator();

const PublicRoutes: React.FC = () => {
  return (
    <Layout>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </Layout>
  );
};

export default PublicRoutes;
