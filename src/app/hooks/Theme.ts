import { useDispatch, useSelector } from 'react-redux';
import { ThemeEnum } from '../enums/Action/Theme.enum';
import { ThemeValueEnum } from '../enums/ThemeValue.enum';
import { RootState } from '../reducers';

export const getTheme = () => {
  return useSelector((state: RootState) => state.theme.value);
}

export const getIsLightTheme = () => {
  const theme = getTheme();
  return theme === ThemeValueEnum.light;
}

export const getIsDarkTheme = () => {
  const theme = getTheme();
  return theme === ThemeValueEnum.dark;
}

export const getToggleTheme = () => {
  const dispatch = useDispatch();
  return () => {
    dispatch({
      type: ThemeEnum.TOGGLE
    });
  };
}



