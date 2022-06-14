import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Layout, CustomLink } from '../components';
import { CustomView, CustomText } from '../styles/commons';

const ForgotPassword: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <CustomView full justifyContent="center" alignItems="center">
        <CustomView marginBottom="xl">
          <CustomText size="xxxl" weight="black" color="white" align="center">
            Esqueci a senha
          </CustomText>
        </CustomView>
        <CustomLink
          text="Login"
          onPress={() => navigation.navigate('Login' as never)}
        />
      </CustomView>
    </Layout>
  );
};

export default ForgotPassword;
