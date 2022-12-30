/* eslint-disable @typescript-eslint/no-unused-vars */
import GroupMock from '../../../../types/Entity/Group/GroupDTOMock.json';
import GroupMockList from '../../../../types/Entity/Group/GroupDTOMockList.json';
import GroupMockListPaginated from '../../../../types/Entity/Group/GroupDTOMockListPaginated.json';
import { Group } from '../../../../types/Entity/Group/Group';
import { MockCrudService } from '../../../Crud/MockCrudService';

const groupDTOMock: Group = GroupMock as any;
const groupDTOMockList: Array<Group> = GroupMockList as Array<any>;
const groupDTOMockListPaginated = (GroupMockListPaginated) as any;

/**
 * Serviço para acionar a serviços da api para gerenciar Group
 *
 * @name GroupCrudService
 * @module service/Module/Admin/Group/Crud
 * @category Serviço
 * @subcategory Group
 */
export class GroupMockCrudService extends MockCrudService {

    protected path(): string { return 'GroupMockCrudService'; }

    protected mock() { return this.resolve(groupDTOMock); }

    protected mockList(): Promise<Array<any>> { return this.resolve(groupDTOMockList); }

    protected mockListPaginated(): Promise<any> { return this.resolve(groupDTOMockListPaginated); }

    protected mockLimit() { return 10; }
}

export default new GroupMockCrudService();
