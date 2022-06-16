import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../contexts/auth_context';
import { LooseObject } from '../types';
import { CustomText, CustomView } from '../styles/commons';
import { Theme } from '../styles/theme';

export const MenuIcon: React.FC = () => {
  const navigation = useNavigation() as LooseObject;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}
    >
      <CustomText color="white" weight="bold" size="lg">
        Menu
      </CustomText>
    </TouchableOpacity>
  );
};

export const MenuContent: React.FC = () => {
  const navigation = useNavigation();
  const { me, logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.colors.black }}>
      <DrawerContentScrollView>
        <CustomView marginBottom="lg">
          <CustomText
            size="xl"
            weight="semibold"
            color="secundary"
            align="center"
          >
            {me?.name}
          </CustomText>
        </CustomView>
        <DrawerItem
          label={() => (
            <CustomText color="white" weight="bold" size="lg">
              Dashboard
            </CustomText>
          )}
          onPress={() => navigation.navigate('Dashboard' as never)}
        />
        <DrawerItem
          label={() => (
            <CustomText color="white" weight="bold" size="lg">
              Products
            </CustomText>
          )}
          onPress={() => navigation.navigate('Products' as never)}
        />
        <DrawerItem
          label={() => (
            <CustomText color="white" weight="bold" size="lg">
              Logout
            </CustomText>
          )}
          onPress={() => logout()}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};
