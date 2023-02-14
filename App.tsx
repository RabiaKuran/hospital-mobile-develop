import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Router from './src/routers/Router';
//Views
import Login from './src/pages/Login';

import Language from './src/pages/Language';
import Profil from './src/pages/Profil';

//
import reducers from './src/reducers/index';

// //Third Party Library
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

export default class App extends Component {
  render() {
   
    return (
      <SafeAreaView style={{flex: 1}}>
        <Router />
      </SafeAreaView>
    );
  }
}
