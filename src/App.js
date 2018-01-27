import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import Routing from './Routing';
import store from './redux/store';

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Routing />
      </Provider>
    );
  }
}
