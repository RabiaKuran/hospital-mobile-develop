import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Router from './src/routers/Router';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Router />
      </SafeAreaView>
    );
  }
}
