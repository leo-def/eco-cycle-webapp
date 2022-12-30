/* eslint-disable @typescript-eslint/no-unused-vars */
import CollaboratorMock from '../../../../types/Entity/Collaborator/CollaboratorDTOMock.json';
import CollaboratorMockList from '../../../../types/Entity/Collaborator/CollaboratorDTOMockList.json';
import CollaboratorMockListPaginated from '../../../../types/Entity/Collaborator/CollaboratorDTOMockListPaginated.json';
import { Collaborator } from '../../../../types/Entity/Collaborator/Collaborator';
import { GroupMockCrudService } from '../GroupMockCrudService';

const collaboratorDTOMock: Collaborator = CollaboratorMock as any;
const collaboratorDTOMockList: Array<Collaborator> = CollaboratorMockList as Array<any>;
const collaboratorDTOMockListPaginated = (CollaboratorMockListPaginated) as any;

/**
 * Serviço para acionar a serviços da api para gerenciar Collaborator
 *
 * @name CollaboratorCrudService
 * @module service/Module/Admin/Collaborator/Crud
 * @category Serviço
 * @subcategory Collaborator
 */
export class CollaboratorMockCrudService extends GroupMockCrudService {

    protected path (): string {  return 'CollaboratorMockCrudService' }

    protected mock() { return this.resolve(collaboratorDTOMock) }

    protected mockList(): Promise<Array<any>> { return this.resolve(collaboratorDTOMockList) }

    protected mockListPaginated(): Promise<any> { return this.resolve(collaboratorDTOMockListPaginated) }

    protected mockLimit() { return 10 }
}

export default new CollaboratorMockCrudService()
