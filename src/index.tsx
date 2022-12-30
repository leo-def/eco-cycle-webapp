import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ReduxRouter } from '@lagunovsky/redux-react-router';
import { CookiesProvider } from 'react-cookie';
import App from './app/containers/App/App';
import * as serviceWorker from './config/serviceWorker';
import reportWebVitals from './reportWebVitals';
import configureStore, { history } from './config/configureStore';
import i18n from './config/i18n';
import './index.css';

const preloadedState = {} as any

const element = document.getElementById('root')
if (!element) {
  throw new Error('couldn\'t find element with id root')
}
const store = configureStore(preloadedState)

const render = () => {
  ReactDOM.render(
    <Suspense fallback="loading">
      <CookiesProvider> {/* Cookies */}
        <I18nextProvider i18n={i18n}> {/* I18n */}
          <Provider store={store}>  {/* Redux */}
            <ReduxRouter history={history} store={store}>
              <App />
            </ReduxRouter>
          </Provider>
        </I18nextProvider>
      </CookiesProvider>
    </Suspense>,
    document.getElementById('root')
  );
}

render()

// Hot reloading
if ((module as any).hot && (module as any).accept) {
  // Reload components
  (module as any).accept('./App', () => {
    render()
  })
}

serviceWorker.unregister()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
