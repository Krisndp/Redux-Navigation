import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import Main from './src/Main';
import {View} from 'react-native';

export default class App extends React.Component{

  render(){
    return(
      <Provider store = {store}>
        <Main/>
      </Provider>
    )
  }
}