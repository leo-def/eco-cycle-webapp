import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { GroupContextValue, GroupContext } from '../../../../contexts/Module/GroupContext';
import { RootState } from '../../../../reducers';

/**
 * Module GroupSetProvider
 * @param {any}  props Properties
 * @return {React.Component} Module GroupSetProvider Component
 */
export const GroupSetProvider = (props: any) => {
  const { children } = props;
  const state = useSelector((state: RootState) => state.module.group.set)
  const value = useMemo(() => {
    const { item, fix } = state;
    return ({ item, fix } as GroupContextValue);
  }, [state])

  return (<GroupContext.Provider value={value}>
    {children}
  </GroupContext.Provider>)
}
