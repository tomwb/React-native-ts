import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth_context';
import { CustomButton, Layout } from '../../components';
import { CustomText, CustomView } from '../../styles/commons';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const { me, logout } = useContext(AuthContext);

  return (
    <Layout>
      <CustomView full justifyContent="center" alignItems="center">
        <CustomView marginTop="md">
          <CustomText
            size="xl"
            weight="semibold"
            color="secundary"
            align="center"
          >
            {me?.name}
          </CustomText>
        </CustomView>
        <CustomView grid marginTop="xl" justifyContent="center">
          <CustomView marginBottom="sm" column="8">
            <CustomButton
              full
              text="Produtos"
              onPress={() => {
                navigation.navigate('Products' as never);
              }}
            />
          </CustomView>
          <CustomView marginBottom="sm" column="8">
            <CustomButton
              full
              text="Logout"
              onPress={() => {
                logout();
              }}
            />
          </CustomView>
        </CustomView>
      </CustomView>
    </Layout>
  );
};

export default Dashboard;
