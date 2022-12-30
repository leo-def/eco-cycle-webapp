import { ThemeEnum } from '../enums/Action/Theme.enum';
import { ThemeValueEnum } from '../enums/ThemeValue.enum';


export interface ThemeState {
  value: ThemeValueEnum;
}

export const initialState: any = {
  value: ThemeValueEnum.dark
}

export default function reduce (state = initialState, action: any) {
  switch (action.type) {
    case ThemeEnum.SET:
    case ThemeEnum.LOAD_SUCCESS:
      return {
        value: action.payload || ThemeValueEnum.dark
      }
    case ThemeEnum.SET_DARK:
      return {
        value: ThemeValueEnum.dark
      }
    case ThemeEnum.SET_LIGHT:
      return {
        value: ThemeValueEnum.light
      }
    case ThemeEnum.TOGGLE:
      return {
        value: (state.value === ThemeValueEnum.light
          ? ThemeValueEnum.dark
          : ThemeValueEnum.light)
      }
    case ThemeEnum.LOAD:
      return state
    default:
      return state
  }
}
