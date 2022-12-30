import { SidebarEnum } from '../enums/Action/Sidebar.enum';

export interface SidebarState {
  open: boolean;
  anchor: string;
}

export const initialState: any = {
  open: false,
  anchor: 'left'
};

export default function reduce(state = initialState, action: any) {
  switch (action.type) {
    case SidebarEnum.OPEN_SIDEBAR:
      return {
        ...state,
        open: true,
        anchor: action?.payload?.anchor
      };
    case SidebarEnum.CLOSE_SIDEBAR:
      return {
        ...state,
        open: false
      };
    case SidebarEnum.TOGGLE_SIDEBAR:
      return {
        ...state,
        open: !state.open,
        anchor: action?.payload?.anchor || state.anchor
      };
    default:
      return state;
  }
}
