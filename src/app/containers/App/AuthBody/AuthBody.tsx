import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { Module } from '../../Module/Module';
import { Public } from '../../Public/Public';
import { Waiting } from '../../Shared/Waiting/Waiting';
import './AuthBody.css';

/**
 * AuthBody 
 *   App content by authenticated user
 * @param {any}  props Properties
 * @return {React.Component} AuthBody Component
 */
export const AuthBody = (props: any) => {
  // auth
  const { isAuth, userLoad } = useSelector((state: RootState) => state.auth);

  const body = useMemo(() => {
    if (!userLoad) {
      return (<Waiting {...props} />)
    }
    return (isAuth
      ? (<Module {...props} />)
      : (<Public {...props} />)
    )
  }, [isAuth, userLoad]);
  return (<React.Fragment>{body}</React.Fragment>);
}

export default AuthBody;
