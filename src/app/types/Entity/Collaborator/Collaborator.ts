import { TitleEntity } from '../Abstract/TitleEntity';
import { User } from '../User/User';
import { CollaboratorRoleEnum } from '../../../enums/Entity/CollaboratorRole.enum';

export interface Collaborator extends TitleEntity {
	userid?: number;
  user?: User;
  role?: CollaboratorRoleEnum;
}