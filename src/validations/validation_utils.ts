import { LooseObject, ValidationErrors } from '../types';

export default {
  buildErrors: (model: string, error: LooseObject): ValidationErrors => {
    const output: LooseObject = {};
    const allErrors: string[] = [];
    error.cause.forEach((item: LooseObject) => {
      if (!output[item.target]) {
        output[item.target] = [];
      }
      const message = `validations.${model}.${item.target}.${item.rule.name}`;
      output[item.target].push(message);
      allErrors.push(message);
    });
    return {
      success: false,
      message: allErrors.join(', '),
      errors: output,
    };
  },

  ignoreFields: (schema: LooseObject, fields: string[]): LooseObject => {
    const output: LooseObject = {};
    // eslint-disable-next-line
    for (let field in schema) {
      if (!fields.includes(field)) {
        output[field] = schema[field];
      }
    }
    return output;
  },
};
