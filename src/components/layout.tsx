import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};

export default Layout;
