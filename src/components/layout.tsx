import React from 'react';
import { SafeAreaView } from 'react-native';
import { LayoutView } from '../styles/components/layout_styles';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutView>
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </LayoutView>
  );
};

export default Layout;
