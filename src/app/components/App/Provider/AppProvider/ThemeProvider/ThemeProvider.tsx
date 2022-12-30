import React, { useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../reducers';
import { ThemeValueEnum } from '../../../../../enums/ThemeValue.enum';
/**
 * ThemeProvider 
 *   Wrapper all provider for App
 * @param {any}  props Properties
 * @return {React.Component} ThemeProvider Component
 */
export const ThemeProvider = (props: any) => {
   const children = useMemo(() => props.children, [props.children])

  // theme
  const themeValue = useSelector((state: RootState) => state.theme.value)
  const mode: 'light' | 'dark' = useMemo(() => (themeValue ===  ThemeValueEnum.dark ? 'dark' : 'light'), [themeValue]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        },
      }),
    [mode],
  );

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider