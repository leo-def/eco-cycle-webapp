import { UserTypeEnum } from '../../../enums/Entity/UserType.enum';
import { Entity } from '../Abstract/Entity';
import { Profile } from '../Profile/Profile';

export interface User extends Entity {
  username?: string;
  password?: string;
  type?: UserTypeEnum;
  profile?: Profile;
  profileId?: number;
}