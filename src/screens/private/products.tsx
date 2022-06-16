import React, { useCallback, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { CustomLink, Layout } from '../../components';
import {
  ProductsProvider,
  ProductsContext,
} from '../../contexts/products_context';
import { CustomText, CustomView } from '../../styles/commons';
import { ProductBoxView } from '../../styles/screens/products';
import { LooseObject } from '../../types';

const ProductsPage: React.FC = () => {
  const navigation = useNavigation();
  const { list, loading, paginate, loadList } = useContext(ProductsContext);

  useEffect(() => {
    loadList({});
  }, [loadList]);

  const loadMoreProducts = useCallback(() => {
    const page = paginate && paginate.page ? paginate.page + 1 : 1;
    loadList({
      page,
    });
  }, [paginate, loadList]);

  const renderItem = useCallback(
    ({ item, index }: LooseObject) => {
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              'Product' as never,
              {
                productId: item.id,
              } as never,
            )
          }
        >
          <ProductBoxView>
            <CustomText size="lg" weight="black" color="primary" align="center">
              {item.name}
            </CustomText>
          </ProductBoxView>
        </TouchableOpacity>
      );
    },
    [navigation],
  );

  const renderListFooter = useCallback(() => {
    if (!loading) {
      return null;
    }

    return <ActivityIndicator animating size="large" color="#ffffff" />;
  }, [loading]);

  return (
    <Layout>
      <CustomView marginTop="xl" grid>
        <CustomView column="3" justifyContent="center">
          <CustomLink
            text="Voltar"
            onPress={() => navigation.navigate('Dashboard' as never)}
          />
        </CustomView>
        <CustomView column="9">
          <CustomText size="xxxl" weight="black" color="white" align="center">
            Produtos
          </CustomText>
        </CustomView>
      </CustomView>

      <CustomView marginTop="md" marginBottom="md" full>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          ListFooterComponent={renderListFooter}
          onEndReached={loadMoreProducts}
        />
      </CustomView>
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
