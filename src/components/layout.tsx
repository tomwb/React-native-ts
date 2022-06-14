import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      {children}
    </SafeAreaView>
  );
};

export default Layout;
