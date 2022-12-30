import React from 'react';
import { AuthLoader } from './AuthLoader/AuthLoader';
import { LocaleLoader } from './LocaleLoader/LocaleLoader';
import { ThemeLoader } from './ThemeLoader/ThemeLoader';
/**
 * AppLoader 
 *   Wrapper all loads for App
 * @param {any}  props Properties
 * @return {React.Component} AppLoader Component
 */
export const AppLoader = () => {

  return (<React.Fragment>
    <AuthLoader />
    <LocaleLoader />
    <ThemeLoader />
  </React.Fragment>)
}

export default AppLoader