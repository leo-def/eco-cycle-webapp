import { AuthService } from './AuthService';
import UserDTOMock from '../../types/Entity/User/UserDTOMock.json';
import { User } from '../../types/Entity/User/User';
import { Token } from '../../types/Auth';
const userDTOMock: User = UserDTOMock as any;

/**
 * AuthMockService, class representing a authentication service.
 */
export class AuthMockService extends AuthService {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected async requestProfile(): Promise<any> {
    return Promise.resolve(userDTOMock);
  }
  s
  protected async requestLogin(token: Token): Promise<any> {
    return Promise.resolve({
      access_token: token || 's$%#123nk8vb%da&*#sef#$sefefsf6&svsfgef34-*'
    });
  }

  protected async loadTokenHeader(token: Token): Promise<Token> {
    return Promise.resolve(token);
  }

}

export default new AuthMockService();
