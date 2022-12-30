import
React,
{
  useMemo,
  useEffect,
  useCallback
}
  from 'react';
// import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthEnum } from '../../../../../enums/Action/Auth.enum';
import { RootState } from '../../../../../reducers';

/**
 * AuthLoader 
 *   Load authentication
 * @param {any}  props Properties
 * @return {React.Component} AuthLoader Component
 */
export const AuthLoader = () => {
 /* // Is LogoutPage
    const location = useLocation();
    const pathname = useMemo(() => (location.pathname || '').toLowerCase(), [location.pathname])
    const isLogout = useMemo(() => pathname.includes('logout'), [pathname])
 */
  const { userLoad } = useSelector((state: RootState) => state.auth)

  const dispatch = useDispatch()
  // Carregamento de dados iniciais
  const loadAuth = useCallback(() =>
    dispatch({
      type: AuthEnum.LOAD
    }), [dispatch])

  /* // Cookies example
    const [cookies] = useCookies([authCookieTokenName])
    const setToken = useCallback((token) => dispatch({ type: AuthEnum.SET_TOKEN, payload: { token } }), [dispatch])
    const tokenCookie = useMemo(() => cookies[authCookieTokenName], [cookies])
    const tokenCookie = useMemo(() => '59e21172-007a-42e0-a4a6-ae774b979827', [cookies])
  */
  useEffect(() => {
    if (!userLoad ) {
      loadAuth()
    }
  }, [loadAuth, userLoad])

  return (<React.Fragment></React.Fragment>)
}

export default AuthLoader
