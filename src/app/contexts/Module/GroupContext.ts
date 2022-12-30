import React from 'react';
import { Group } from '../../types/Entity/Group/Group';

export interface GroupContextValue {
  item?: Group;
  fix?: boolean;
}

export const groupContextDefaultValue = {} as GroupContextValue
export const GroupContext = React.createContext(groupContextDefaultValue)
