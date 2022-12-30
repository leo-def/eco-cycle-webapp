import { Token } from '../../types/Auth';

export class TokenStorageService {

    static getToken(): Token | undefined {
      return localStorage.getItem('token');
  }
  
    static removeToken(): void {
      localStorage.removeItem('token');
  }
  
    static setToken(token?: Token): Token | undefined {
      if(token){
        localStorage.setItem('token', token);
      } else {
        localStorage.removeItem('token');
      }
      return token;
    }
    
  }