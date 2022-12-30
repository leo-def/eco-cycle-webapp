import { LinearProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import './Loading.css';

/**
 * Loading
 *   Inform app is waiting a process
 * @param {any}  props Properties
 * @return {React.Component} Loading Component
 */
export const Loading = () => {
  const tasks = useSelector((state: RootState) => state.loading.tasks);
  const loading = tasks && tasks.length > 0;
  return (<React.Fragment>{
    loading
      ? <LinearProgress className='waiting-bar'/>
      : null
    }</React.Fragment>)
}


export default Loading
