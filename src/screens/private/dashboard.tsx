import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth_context';
import { CustomButton, Layout, CustomLink } from '../../components';
import { CustomText, CustomView } from '../../styles/commons';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const { me, logout } = useContext(AuthContext);

  return (
    <Layout>
      <CustomView full justifyContent="center" alignItems="center">
        <CustomText
          size="xl"
          weight="semibold"
          color="secundary"
          align="center"
        >
          {me?.name}
        </CustomText>
        <CustomView marginTop="md">
          <CustomLink
            text="Produtos"
            onPress={() => navigation.navigate('Products' as never)}
          />
        </CustomView>
        <CustomView marginTop="md">
          <CustomButton
            text="Logout"
            onPress={() => {
              logout();
            }}
          />
        </CustomView>
      </CustomView>
    </Layout>
  );
};

export default Dashboard;
