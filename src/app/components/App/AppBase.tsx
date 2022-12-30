import React from 'react';
import { Loading } from './Loading/Loading';
import { Message } from './Message/Message';

/**
 * AppBase 
 *   Load authentication
 * @param {any}  props Properties
 * @return {React.Component} AppBase Component
 */
export const AppBase = () => {

  return (<React.Fragment>
    <Loading />
    <Message />
  </React.Fragment>)
}

export default AppBase