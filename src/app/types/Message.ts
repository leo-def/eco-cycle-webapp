import { MessageVariantEnum } from '../enums/MessageVariant.enum';

export interface Message {
  message: string;
  variant?: MessageVariantEnum;
  id?: string
}

export const compare = (msgA: any, msgB: any) => {
  return msgA.id && msgA.id === msgB.id
}
