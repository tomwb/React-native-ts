import React, { useCallback, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { Input } from '../components';
import { validateLoginForm } from '../validations/auth_validation';
import { LooseObject } from '../types';
import { AuthContext } from '../contexts/auth_context';

export interface LoginFormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const navigation = useNavigation();
  const { login, me } = useContext(AuthContext);
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
    <View>
      <Text>Login</Text>
      <Input
        name="username"
        value={formData.username}
        placeholder="Digite seu email"
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
        placeholder="Digite sua senha"
        onChange={value => handleChange('password', value)}
        returnKeyType="send"
        setRef={ref => {
          refInputPassword = ref;
        }}
        errors={errors}
        onSubmitEditing={handleSubmit}
      />
      <Button onPress={handleSubmit} title="Enviar" />
      <Button
        title="Esqueci senha"
        onPress={() => navigation.navigate('ForgotPassword' as never)}
      />
      <Text>{me?.name}</Text>
    </View>
  );
};

export default Login;
