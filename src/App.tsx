import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './contexts/auth_context';
import Routes from './routes';
import './validations/extend_validation';
import { Theme } from './styles/common';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
