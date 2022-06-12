import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

const Login: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Esqueci senha"
        onPress={() => navigation.navigate('ForgotPassword' as never)}
      />
    </View>
  );
};

export default Login;
