import
React,
{
  useEffect,
  useCallback
}
  from 'react';
import { useDispatch } from 'react-redux';
import { ThemeEnum } from '../../../../../enums/Action/Theme.enum';

/**
 * ThemeLoader 
 *   Load authentication
 * @param {any}  props Properties
 * @return {React.Component} ThemeLoader Component
 */
export const ThemeLoader = () => {

  const dispatch = useDispatch()

  const loadTheme = useCallback(() =>
    dispatch({
      type: ThemeEnum.LOAD
    }), [dispatch])

  useEffect(() => {
    loadTheme()
  }, [loadTheme])


  return (<React.Fragment></React.Fragment>)
}

export default ThemeLoader
