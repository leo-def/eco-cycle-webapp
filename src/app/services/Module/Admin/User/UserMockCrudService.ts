/* eslint-disable @typescript-eslint/no-unused-vars */
import UserMock from '../../../../types/Entity/User/UserDTOMock.json';
import UserMockList from '../../../../types/Entity/User/UserDTOMockList.json';
import UserMockListPaginated from '../../../../types/Entity/User/UserDTOMockListPaginated.json';
import { User } from '../../../../types/Entity/User/User';
import { MockCrudService } from '../../../Crud/MockCrudService';

const userDTOMock: User = UserMock as any;
const userDTOMockList: Array<User> = UserMockList as Array<any>;
const userDTOMockListPaginated = (UserMockListPaginated) as any;

/**
 * Serviço para acionar a serviços da api para gerenciar User
 *
 * @name UserCrudService
 * @module service/Module/Admin/User/Crud
 * @category Serviço
 * @subcategory User
 */
export class UserMockCrudService extends MockCrudService {

    protected path(): string { return 'UserMockCrudService'; }

    protected mock() { return this.resolve(userDTOMock); }

    protected mockList(): Promise<Array<any>> { return this.resolve(userDTOMockList); }

    protected mockListPaginated(): Promise<any> { return this.resolve(userDTOMockListPaginated); }

    protected mockLimit() { return 10; }
}

export default new UserMockCrudService();
