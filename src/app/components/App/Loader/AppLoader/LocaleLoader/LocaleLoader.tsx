import
React,
{
  useEffect,
  useCallback
} from 'react';
import { useDispatch } from 'react-redux';
import { LocaleEnum } from '../../../../../enums/Action/Locale.enum';

/**
 * LocaleLoader 
 *   Load authentication
 * @param {any}  props Properties
 * @return {React.Component} LocaleLoader Component
 */
export const LocaleLoader = () => {
  const dispatch = useDispatch()
  const setDateLocale = useCallback((date?: any) => dispatch({ type: LocaleEnum.SET_DATE, payload: { date } }), [dispatch])
  const loadLanguages = useCallback(() => dispatch({ type: LocaleEnum.LOAD_LANGUAGES }), [dispatch])

  useEffect(() => {
    setDateLocale()
  }, [setDateLocale])

  useEffect(() => {
    loadLanguages()
  }, [loadLanguages])

  return (<React.Fragment></React.Fragment>)
}

export default LocaleLoader
