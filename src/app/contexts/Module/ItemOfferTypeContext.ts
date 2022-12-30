import React from 'react';
import { ItemOfferTypeEnum } from '../../enums/Entity/ItemOfferType.enum';

export interface ItemOfferTypeContextValue {
  type?: ItemOfferTypeEnum;
}

export const itemOfferTypeContextDefaultValue = {} as ItemOfferTypeContextValue
export const ItemOfferTypeContext = React.createContext(itemOfferTypeContextDefaultValue)