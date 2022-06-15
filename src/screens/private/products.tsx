import React, { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native';
import { CustomLink, Layout } from '../../components';
import {
  ProductsProvider,
  ProductsContext,
} from '../../contexts/products_context';
import { CustomText, CustomView } from '../../styles/commons';
import { ProductBoxView } from '../../styles/screens/products';

const ProductsPage: React.FC = () => {
  const navigation = useNavigation();
  const { list, loadList } = useContext(ProductsContext);

  useEffect(() => {
    loadList({});
  }, [loadList]);

  return (
    <Layout>
      <ScrollView>
        <CustomView marginTop="xl">
          <CustomText size="xxxl" weight="black" color="white" align="center">
            Produtos
          </CustomText>
        </CustomView>
        <CustomView marginTop="md">
          <CustomLink
            text="Voltar"
            onPress={() => navigation.navigate('Dashboard' as never)}
          />
        </CustomView>
        <CustomView marginTop="xl">
          {list.map(product => {
            return (
              <TouchableOpacity
                key={product.id}
                onPress={() =>
                  navigation.navigate(
                    'Product' as never,
                    {
                      productId: product.id,
                    } as never,
                  )
                }
              >
                <ProductBoxView>
                  <CustomText
                    size="lg"
                    weight="black"
                    color="primary"
                    align="center"
                  >
                    {product.name}
                  </CustomText>
                </ProductBoxView>
              </TouchableOpacity>
            );
          })}
        </CustomView>
      </ScrollView>
    </Layout>
  );
};

const Products = () => {
  return (
    <ProductsProvider>
      <ProductsPage />
    </ProductsProvider>
  );
};
export default Products;
