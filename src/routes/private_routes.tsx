import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Theme } from '../styles/theme';
import Dashboard from '../screens/private/dashboard';
import Products from '../screens/private/products';
import Product from '../screens/private/product';
import { MenuContent, MenuIcon } from './menu';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const StackPrivateRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.colors.black,
        },
        title: '',
        headerLeft: () => <MenuIcon />,
        // headerShown: false,
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
  );
};

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
      <Drawer.Navigator
        drawerContent={() => <MenuContent />}
        initialRouteName="StackPrivateRoutes"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="StackPrivateRoutes"
          component={StackPrivateRoutes}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default PrivateRoutes;
