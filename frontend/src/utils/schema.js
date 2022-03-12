import * as yup from 'yup';

const schema = yup.object({
  nome: yup.string().required(),
  razaosocial: yup.string().required(),
  cnpj: yup.string().required(),
  segmento: yup.string().required(),
  endereco: yup.string().required(),
  telefone: yup.string().required(),
  email: yup.string().required(),
}).required();

export default schema;
