/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from './user';

interface LooseObject {
  [key: string]: any;
}

interface ValidationErrors {
  success: boolean;
  message?: string;
  errors?: LooseObject;
}

export type { LooseObject, ValidationErrors, User };
