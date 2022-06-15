import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Theme } from '../styles/theme';
import Dashboard from '../screens/private/dashboard';
import Products from '../screens/private/products';
import Product from '../screens/private/product';

const Stack = createNativeStackNavigator();

const PrivateRoutes: React.FC = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: Theme.colors.black,
        },
      }}
    >
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen
          name="Product"
          component={Product}
          initialParams={{ productId: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PrivateRoutes;
