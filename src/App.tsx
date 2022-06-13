import React from 'react';
import { AuthProvider } from './contexts/auth_context';
import Routes from './routes';
import './validations/extend_validation';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
