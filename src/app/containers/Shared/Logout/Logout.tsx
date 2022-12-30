import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AuthEnum } from '../../../enums/Action/Auth.enum';
import Waiting from '../Waiting/Waiting';

/**
 * Logout
 * @param {any}  props Properties
 * @return {React.Component} Logout Component
 */
export const Logout = React.memo((props: any) => {
  Logout.displayName = 'Logout';
  const dispatch = useDispatch();

  const logout = useCallback(() =>
    dispatch({ type: AuthEnum.LOGOUT }), [dispatch]);

  useEffect(() => {
    logout();
  }, [logout])

  return (<Waiting {...props} />);
})

export default Logout;
