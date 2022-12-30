import { LoadingEnum } from '../enums/Action/Loading.enum';

export class LoadingState {
  tasks: Array<any> = [];
}

export const initialState: any = {
  tasks: []
};

export default function reduce(state = initialState, action: any) {
  switch (action.type) {
    case LoadingEnum.START_LOADING:
      return {
        tasks: [
          ...(state.tasks || []),
          action.payload
        ]
      };
    case LoadingEnum.STOP_LOADING:
      return {
        tasks: state.tasks.filter((task: any) => task !== action.payload)
      };
    default:
      return state;
  }
}
