import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeView } from '../styles/commons';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeView>
        <StatusBar barStyle="light-content" />
        {children}
      </ThemeView>
    </SafeAreaView>
  );
};

export default Layout;
