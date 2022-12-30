import { useDispatch, useSelector } from 'react-redux';
import { SidebarEnum } from '../enums/Action/Sidebar.enum';
import { RootState } from '../reducers';

export const isSidebarOpen = () => {
  return useSelector((state: RootState) => state.sidebar.open);
}

export const getToggleSidebar = () => {
  const dispatch = useDispatch();
  return () => {
    dispatch({
      type: SidebarEnum.TOGGLE_SIDEBAR
    });
  };
}



