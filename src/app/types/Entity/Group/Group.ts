import { ActivityTypeEnum } from '../../../enums/Entity/ActivityType.enum';
import { Entity } from '../Abstract/Entity';
import { Collaborator } from '../Collaborator/Collaborator';
import { Place } from '../Place/Place';
import { Profile } from '../Profile/Profile';
import { User } from '../User/User';
import { Vehicle } from '../Vehicle/Vehicle';

export const getTitle = (item?: Group) => {
  return (item?.profile ? item?.profile.name : item?.owner?.profile?.name) || item?.id;
}

export interface Group extends Entity {
  profileId?: number;
  profile?: Profile;
  type?: ActivityTypeEnum;
  ownerId?: number;
  owner?: User;
  collaborators?: Array<Collaborator>;
  places?: Array<Place>;
  vehicles?: Array<Vehicle>;

}