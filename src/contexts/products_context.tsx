import React, { createContext, useCallback, useReducer } from 'react';
import { Product, LooseObject, Paginate, ReactChildren } from '../types';

import {
  ProductsReducer,
  ProductsReducerDefaultValues,
} from './reducers/products_reducer';

export interface ProductsContextData {
  loading: boolean;
  paginate: Paginate | null;
  data: Product | null;
  list: Product[];
  loadOne: (id: number) => Promise<void>;
  loadList: (params: LooseObject) => Promise<void>;
}

export const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData,
);

export const ProductsProvider: React.FC<ReactChildren> = ({ children }) => {
  const [dataReducer, dispatch] = useReducer(
    ProductsReducer,
    ProductsReducerDefaultValues,
  );

  const loadOne = useCallback(async (id: number) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      // const result = await api.get(`/events/${eventId}`, {});

      dispatch({
        type: 'SET_ONE',
        result: {
          data: {
            id,
            name: `Produto de teste ${id}`,
          },
        },
      });
    } catch (error) {
      // @TODO
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  const loadList = useCallback(async (params: LooseObject) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      // const result = await api.get('/events', params);
      const result: Product[] = [];
      for (let index = 1; index < 15; index++) {
        result.push({
          id: index,
          name: `Produto de teste ${index}`,
        });
      }
      dispatch({
        type: 'SET_LIST',
        result: {
          data: result,
          paginate: {
            limit: 15,
            page: 1,
            pages: 1,
            total: 1,
          },
        },
      });
    } catch (error) {
      // @TODO
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...(dataReducer as ProductsContextData),
        loadOne,
        loadList,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
