import * as Yup from 'yup';
import { ActivityTypeEnum } from '../../../../enums/Entity/ActivityType.enum';
import { EntityFieldsetSchema, entityFieldsetInitialValues, EntityFieldset } from '../../Abstract/EntityFieldset';
import { ProfileFieldset, profileFieldsetInitialValues, ProfileFieldsetSchema } from '../ProfileFieldset';

export interface GroupFieldset  extends EntityFieldset {
  profile: ProfileFieldset;
  type: ActivityTypeEnum;
}

export const GroupFieldsetSchema = EntityFieldsetSchema.shape({
  profile: ProfileFieldsetSchema.nullable(true),
  type: Yup.string().oneOf(Object.values(ActivityTypeEnum) as Array<string>).nullable(true)
});

export const groupFieldsetInitialValues: GroupFieldset = {
  ...entityFieldsetInitialValues,
  profile: profileFieldsetInitialValues,
  type: ActivityTypeEnum.both
};
