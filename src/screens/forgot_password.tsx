import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

const ForgotPassword: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>esqueci a senha</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login' as never)}
      />
    </View>
  );
};

export default ForgotPassword;
