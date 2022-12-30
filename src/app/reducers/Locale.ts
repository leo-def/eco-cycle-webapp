import { LocaleEnum } from '../enums/Action/Locale.enum';
import { defaultDateLocale } from '../types/Locale';
import { defaultLanguageOptions } from '../types/Locale';

export class LocaleState {
  date?: string;
  languages = new Array<any>();
}

export const initialState: any = {
  date: defaultDateLocale,
  languages: defaultLanguageOptions
};

export default function reduce(state = initialState, action: any) {
  switch (action.type) {
    case LocaleEnum.SET_DATE:
      return {
        ...state,
        date: (action.payload.date || defaultDateLocale)
      };
    case LocaleEnum.RESET_DATE:
      return {
        ...state,
        date: defaultDateLocale
      };
    case LocaleEnum.LOAD_LANGUAGES_SUCCESS:
      return {
        ...state,
        languages: (action.payload.languages || defaultLanguageOptions)
      };
    case LocaleEnum.LOAD_LANGUAGES_FAILURE:
      return {
        ...state,
        languages: defaultLanguageOptions
      };
    case LocaleEnum.RESET_LANGUAGES:
      return {
        ...state,
        languages: defaultDateLocale
      };
    case LocaleEnum.RESET:
      return {
        ...state,
        date: defaultDateLocale,
        languages: defaultDateLocale
      };
    case LocaleEnum.LOAD_LANGUAGES:
    default:
      return state;
  }
}

