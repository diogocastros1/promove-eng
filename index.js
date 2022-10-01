import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import Rotas from './src/Rotas'
import { name as appName } from './app.json'

import storeCongfig from './src/store/storeConfig'

import axios from 'axios'
axios.defaults.baseURL = 'https://promove-engenharia.firebaseio.com/'

const store = storeCongfig()
const Redux = () => (
  <Provider store={store}>
    <Rotas />
  </Provider>
)



AppRegistry.registerComponent(appName, () => Redux);
