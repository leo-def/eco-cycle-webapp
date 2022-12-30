import { AddressEnum } from '../../enums/Action/Address.enum';

export interface Address {
  cep?: string;
  street?: string;
  number?: string;
  city?: string;
  country?: string;
  state?: string;
  neighborhood?: string;
  complement?: string;
}

export class AddressState {
  [cep: string]: Address;
}

export const initialState: any = {
};

export default function reduce(state = initialState, action: any) {
  const { address, code } = (action.payload || {});
  switch (action.type) {
    case AddressEnum.ADD_ADDRESS: {
      return (code ? ({
        ...state,
        [code]: address
      }) : state);
    }
    case AddressEnum.REMOVE_ADDRESS: {
      const newValue = Object.assign({}, state);
      if (code) {
        delete newValue[code];
      }
      return newValue;
    }
    default:
      return state;
  }
}
