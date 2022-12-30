
import { createRouterMiddleware } from '@lagunovsky/redux-react-router';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from '../app/reducers';
import rootSaga from '../app/sagas';


// Create history object - Framework history
export const history = createBrowserHistory();

/**
 * Configuração do store do redux, add middlewares
 *  Middleware são plugins que são utilizados pelo redux
 * @param {props: any } preloadedState preloadedState
 * @return {Store} Amazernagem do redux
 */
export default function configureStore(preloadedState: any) {
  const composeEnhancers = window
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;
  const middleWare = new Array<any>();

  // Add Router Middleware - Framework connected-react-router
  // Add history object to Router Middleware - Framework history for dispatching history actions
  const routerMiddleware = createRouterMiddleware(history);
  middleWare.push(routerMiddleware);

  // Add Saga Middleware - Framework Saga
  const sagaMiddleware = createSagaMiddleware();
  middleWare.push(sagaMiddleware);
  // Add Logger Middleware - Framework redux-logger


  const loggerMiddleware = createLogger({
    predicate: () => (process.env.NODE_ENV === 'development')
  });
  middleWare.push(loggerMiddleware);

  // Create store with middewares
  const store = createStore(
    // root reducer with router history
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        ...middleWare
      )
    )
  );

  // Run Sagas - Framework Saga, sagaMiddleware.run(rootSaga);
  rootSaga.forEach((saga: any) =>
    sagaMiddleware.run.bind(sagaMiddleware)(saga)
  );

  // Hot reloading - Framework redux
  if ((module as any).hot) {
    // Enable Webpack hot module replacement for reducers
    (module as any).hot.accept('../app/reducers', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
}
