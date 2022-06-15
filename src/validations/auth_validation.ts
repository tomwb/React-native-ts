import v8n, { ValidationError } from 'v8n';
import { LooseObject, ValidationErrors } from '../types';
import validatorUtils from './validation_utils';

const translations = {
  username: {
    null: 'Preencha seu usuário',
    minLength: 'Preencha seu usuário',
  },
  password: {
    null: 'Preencha sua senha',
    minLength: 'Preencha sua senha',
  },
};

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
    .catch((e: ValidationError) => validatorUtils.buildErrors(e, translations));
};
