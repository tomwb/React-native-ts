import v8n from 'v8n';
import * as cpf from '@fnando/cpf';

v8n.extend({
  validCpf: () => {
    return (value: string) => {
      return cpf.isValid(value) && value === cpf.format(value);
    };
  },
  validEmail: () => {
    return (email: string) => {
      // eslint-disable-next-line
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase());
    };
  },
});
