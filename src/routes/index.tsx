import React, { useContext, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { AuthContext } from '../contexts/auth_context';
import { CustomView, ThemeView } from '../styles/commons';

import PrivateRoutes from './private_routes';
import PublicRoutes from './public_routes';

const Routes: React.FC = () => {
  const { token, me, loading, verifyToken } = useContext(AuthContext);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if (loading) {
    return (
      <ThemeView>
        <CustomView full alignItems="center" justifyContent="center">
          <ActivityIndicator animating size="large" color="#ffffff" />
        </CustomView>
      </ThemeView>
    );
  }

  return token && me ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;
