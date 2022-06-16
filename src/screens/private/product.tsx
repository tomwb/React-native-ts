import React, { useContext, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ScrollView } from 'react-native';
import { Layout, CustomLink } from '../../components';
import {
  ProductsProvider,
  ProductsContext,
} from '../../contexts/products_context';
import { CustomText, CustomView } from '../../styles/commons';
import { LooseObject } from '../../types';

const ProductPage: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { data, loadOne } = useContext(ProductsContext);

  useEffect(() => {
    if (route && route.params && (route.params as LooseObject).productId) {
      loadOne((route.params as LooseObject).productId);
    }
  }, [route, loadOne]);

  return (
    <Layout>
      <ScrollView>
        <CustomView marginTop="xl" grid>
          <CustomView column="3" justifyContent="center">
            <CustomLink
              text="Voltar"
              onPress={() => navigation.navigate('Products' as never)}
            />
          </CustomView>
          <CustomView column="9">
            <CustomText size="xxxl" weight="black" color="white" align="center">
              {data && data.name}
            </CustomText>
          </CustomView>
        </CustomView>
      </ScrollView>
    </Layout>
  );
};

const Product = () => {
  return (
    <ProductsProvider>
      <ProductPage />
    </ProductsProvider>
  );
};
export default Product;
