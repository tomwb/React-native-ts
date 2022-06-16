import React, { useCallback, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import { LooseObject } from '../types';
import { validateLoginForm } from '../validations/auth_validation';
import { AuthContext } from '../contexts/auth_context';
import { Input, Layout, CustomLink, CustomButton } from '../components';
import { CustomText, CustomView } from '../styles/commons';
import { LoginContainerView } from '../styles/screens/login';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ImgLogo = require('../assets/images/logo.png');

export interface LoginFormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const navigation = useNavigation();
  const { login } = useContext(AuthContext);
  const [errors, setErrors] = useState<LooseObject | null>(null);
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = useCallback(async () => {
    setErrors(null);
    const validation = await validateLoginForm(formData);
    setErrors(validation.errors || null);
    if (validation.success) {
      login(formData);
    }
  }, [formData, login]);

  let refInputPassword: LooseObject | null = null;

  return (
    <Layout>
      <CustomView full justifyContent="center" alignItems="center">
        <LoginContainerView>
          <CustomView marginBottom="xl" alignItems="center">
            <Image source={ImgLogo} style={{ width: 150, height: 80 }} />
          </CustomView>
          <Input
            name="username"
            value={formData.username}
            label="Usuário"
            onChange={value => handleChange('username', value)}
            errors={errors}
            onSubmitEditing={() => {
              if (refInputPassword) {
                refInputPassword.focus();
              }
            }}
          />
          <Input
            name="password"
            type="password"
            value={formData.password}
            label="Senha"
            onChange={value => handleChange('password', value)}
            returnKeyType="send"
            setRef={ref => {
              refInputPassword = ref;
            }}
            errors={errors}
            onSubmitEditing={handleSubmit}
          />
          <CustomButton onPress={handleSubmit} text="Enviar" />
          <CustomLink
            text="Esqueci senha"
            onPress={() => navigation.navigate('ForgotPassword' as never)}
          />
        </LoginContainerView>
      </CustomView>
    </Layout>
  );
};

export default Login;
