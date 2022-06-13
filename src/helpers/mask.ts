export const cpf = (value: string) => {
  let output = value;
  output = output.replace(/\D/g, ''); // Remove tudo o que não é dígito
  output = output.slice(0, 11);
  output = output.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
  output = output.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
  // de novo (para o segundo bloco de números)
  output = output.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o terceiro e o quarto dígitos
  return output;
};

export const phone = (value: string) => {
  let output = value;
  output = output.replace(/\D/g, ''); // Remove tudo o que não é dígito
  output = output.slice(0, 11);
  output = output.replace(/^(\d\d)(\d)/g, '($1) $2'); // Coloca parênteses em volta dos dois primeiros dígitos
  output = output.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca hífen entre o quarto e o quinto dígitos
  return output;
};

export const date = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1');
};

export const zipcode = (value: string) => {
  return value
    .replace(/\D/g, '')
    .slice(0, 8)
    .replace(/(\d{5})(\d)/, '$1-$2');
};
