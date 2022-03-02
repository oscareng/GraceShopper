import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';
import store from './store';
import App from './App';
import { StateProvider } from './components/StateProvider';
import reducer, { initialState } from './store/CartReducer';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </Router>
  </Provider>,

  document.getElementById('app')
);
