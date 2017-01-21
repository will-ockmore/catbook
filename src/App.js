/* eslint-env browser */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/reducers';

import CatsContainer from './components/containers/CatsContainer';
import Header from './components/presentational/Header';

require('./scss/app.scss');

const store = createStore(rootReducer);

export class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <CatsContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
