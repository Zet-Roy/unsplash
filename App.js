import React, {Component} from 'react';
import Navigator from './src/router';
import { Provider } from 'react-redux'

import Store from './src/redux/store'

let storeInstance = Store()

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={storeInstance}>
        <Navigator />
      </Provider>
      // <Navigator />
    );
  }
}