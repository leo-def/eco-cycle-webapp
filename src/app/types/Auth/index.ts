
export const loginPageNav = process.env.REACT_APP_URL_LOGIN_PAGE || '/login';
export const logoutPageNav = process.env.REACT_APP_URL_LOGOUT_PAGE ||'/logout';
export const logoutSuccessPageNav = process.env.REACT_APP_URL_LOGOUT_SUCCESS_PAGE ||'/home';
export const loginSuccessPageNav = process.env.REACT_APP_URL_LOGIN_SUCCESS_PAGE ||'/dashboard';
export const authCookieTokenName = 'XSRF-TOKEN';
export const authHeaderTokenName = 'X-XSRF-TOKEN';

export type Token = string | null;
