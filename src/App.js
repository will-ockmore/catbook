/* eslint-env browser */
import React from 'react';
import { Provider } from 'react-redux';

import CatsContainer from './components/containers/CatsContainer';
import Header from './components/presentational/Header';

require('./scss/app.scss');


export class App extends React.Component {

  render() {
    const { store } = this.props;

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

App.propTypes = {
  store: React.PropTypes.isRequired,
};

export default App;
