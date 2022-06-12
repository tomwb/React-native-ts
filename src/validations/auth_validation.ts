import v8n, { ValidationError } from 'v8n';
import { LooseObject, ValidationErrors } from '../types';
import validatorUtils from './validation_utils';

export const validateLoginForm = async (
  data: LooseObject,
): Promise<ValidationErrors> => {
  return v8n()
    .schema({
      username: v8n().not.null().string().minLength(1),
      password: v8n().not.null().string().minLength(1),
    })
    .testAsync(data)
    .then(() => ({ success: true }))
    .catch((e: ValidationError) => validatorUtils.buildErrors('user', e));
};
