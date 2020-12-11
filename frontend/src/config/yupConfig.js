import * as yup from 'yup';
import i18next from 'i18next';

const translation = {
  mixed: {
    default: ({ path }) => `campo inválido`,
    required: ({ path }) => `campo obrigatório`,
    oneOf: ({ path, values }) => `${i18next.t(`fields:${path}`)} deve ser um dos seguintes valores: ${values}`,
    notOneOf: ({ path, values }) => `${i18next.t(`fields:${path}`)} não pode ser um dos seguintes valores: ${values}`,
    notType: ({ path, type, value, originalValue }) =>
      `${i18next.t(`fields:${path}`)} deve ser do tipo ${i18next.t(`fields:types.${type}`)}`,
  },
  string: {
    length: ({ path, length }) => `${i18next.t(`fields:${path}`)} deve ter exatamente ${length} caracteres`,
    min: ({ path, min }) => `${i18next.t(`fields:${path}`)} deve ter pelo menos ${min} caracteres`,
    max: ({ path, max }) => `${i18next.t(`fields:${path}`)} deve ter no máximo ${max} caracteres`,
    email: ({ path }) => `formato de e-mail inválido`,
    url: ({ path }) => `${i18next.t(`fields:${path}`)} deve ter um formato de URL válida`,
    trim: ({ path }) => `${i18next.t(`fields:${path}`)} não deve conter espaços no início ou no fim.`,
    lowercase: ({ path }) => `${i18next.t(`fields:${path}`)} deve estar em maiúsculo`,
    uppercase: ({ path }) => `${i18next.t(`fields:${path}`)} deve estar em minúsculo`,
  },
  number: {
    min: ({ path, min }) => `${i18next.t(`fields:${path}`)} deve ser no mínimo ${min}`,
    max: ({ path, max }) => `${i18next.t(`fields:${path}`)} deve ser no máximo ${max}`,
    lessThan: ({ path, less }) => `${i18next.t(`fields:${path}`)} deve ser menor que ${less}`,
    moreThan: ({ path, more }) => `${i18next.t(`fields:${path}`)} deve ser maior que ${more}`,
    notEqual: ({ path, notEqual }) => `${i18next.t(`fields:${path}`)} não pode ser igual à ${notEqual}`,
    positive: ({ path }) => `${i18next.t(`fields:${path}`)} deve ser um número posítivo`,
    negative: ({ path }) => `${i18next.t(`fields:${path}`)} deve ser um número negativo`,
    integer: ({ path }) => `${i18next.t(`fields:${path}`)} deve ser um número inteiro`,
  },
  date: {
    min: ({ path, min }) => `${i18next.t(`fields:${path}`)} deve ser maior que a data ${min}`,
    max: ({ path, max }) => `${i18next.t(`fields:${path}`)} deve ser menor que a data ${max}`,
  },
  array: {
    min: ({ path, min }) => `${i18next.t(`fields:${path}`)} deve ter no mínimo ${min} itens`,
    max: ({ path, max }) => `${i18next.t(`fields:${path}`)} deve ter no máximo ${max} itens`,
  },
};

yup.setLocale(translation);

export default yup;
