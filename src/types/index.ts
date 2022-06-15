/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from './user';
import { Product } from './Product';

interface LooseObject {
  [key: string]: any;
}

interface ValidationErrors {
  success: boolean;
  message?: string;
  errors?: LooseObject;
}

interface Paginate {
  limit: number;
  page: number;
  pages: number;
  total: number;
}

interface ReactChildren {
  children?: React.ReactNode;
}

export type {
  LooseObject,
  ValidationErrors,
  Paginate,
  ReactChildren,
  User,
  Product,
};
