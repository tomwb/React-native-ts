/* eslint-disable @typescript-eslint/no-explicit-any */
export interface LooseObject {
  [key: string]: any;
}

export interface ValidationErrors {
  success: boolean;
  message?: string;
  errors?: LooseObject;
}
