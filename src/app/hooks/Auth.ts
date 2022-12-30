import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { JWTBody, JWTUtils } from '../utils/JWTUtils';

export const getAuthToken = (): string | undefined => {
  return useSelector((state: RootState) => state.auth.token);
}

export const getAuthTokenResolved = (): JWTBody | undefined => {
  const token = getAuthToken();
  return token ? JWTUtils.resolveJWTToken(token) : undefined;
}

export const getAuthUser = () => {
  const resolvedToken = getAuthTokenResolved();
  return resolvedToken?.payload;
}