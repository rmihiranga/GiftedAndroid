import React from 'react';
import { StyleSheet, Text, View ,Image , TextInput , Button, ImageBackground, Spacer } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import login from './components/auth/login'
import signup from './components/auth/signup'
import mainscreen from './components/main/mainscreen'



export default class App extends React.Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}

const AppStackNavigator = createAppContainer(createSwitchNavigator(
  {
  login,
  signup,
  mainscreen,
  },
  {
  initialRouteName: 'login'
  }
  ));

  const AppContainer = createAppContainer(AppStackNavigator);

