
import enLocale from 'date-fns/locale/en-US';
import esLocale from 'date-fns/locale/es';
import ptLocale from 'date-fns/locale/pt-BR';

export const defaultDateLocale = 'br';

export const defaultLanguageOptions = [
  'en-US',
  'es-ES',
  'pt-BR'
];

export const localeMap = {
  en: enLocale,
  pt: ptLocale,
  es: esLocale,
};

