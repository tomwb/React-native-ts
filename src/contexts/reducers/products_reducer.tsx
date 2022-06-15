import { LooseObject, Paginate, Product } from '../../types';

interface ProductsReducerValues {
  loading: boolean;
  paginate: Paginate | null;
  data: Product | null;
  list: Product[];
}

export const ProductsReducerDefaultValues: ProductsReducerValues = {
  loading: false,
  paginate: null,
  data: null,
  list: [],
};

export const ProductsReducer = (
  state: ProductsReducerValues,
  action: LooseObject,
): ProductsReducerValues => {
  const nextState = { ...state };

  switch (action.type) {
    case 'SET_LOADING':
      nextState.loading = action.loading;
      break;
    case 'SET_ONE':
      nextState.data = action.result.data;
      break;
    case 'SET_LIST':
      nextState.list = action.result.data;
      nextState.paginate = action.result.paginate;
      break;
    default:
      break;
  }
  return nextState;
};
