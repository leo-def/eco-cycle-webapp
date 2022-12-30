import { combineReducers } from 'redux';
import { createRouterReducer } from '@lagunovsky/redux-react-router';
import moduleReducer, { ModuleState } from './Module';
// import publicReducer, { PublicState } from './Public';
import sharedReducer, { SharedState } from './Shared';
import authReducer, { AuthState } from './Auth';
import loadingReducer, { LoadingState } from './Loading';
import localeReducer, { LocaleState } from './Locale';
import messageReducer, { MessageState } from './Message';
import sidebarReducer, { SidebarState } from './Sidebar';
import themeReducer, { ThemeState } from './Theme';

export interface RootState {
  router: any;
  module: ModuleState;
  // public: PublicState;
  shared: SharedState;
  auth: AuthState;
  loading: LoadingState;
  locale: LocaleState;
  message: MessageState;
  sidebar: SidebarState;
  theme: ThemeState;
}

export const createRootReducer = (history: any) => combineReducers({
  ...(history ? { router: createRouterReducer(history) } : ({})),
  module: moduleReducer,
  // public: publicReducer
  shared: sharedReducer,
  auth: authReducer,
  loading: loadingReducer,
  locale: localeReducer,
  message: messageReducer,
  sidebar: sidebarReducer,
  theme: themeReducer,
});

export default createRootReducer;
