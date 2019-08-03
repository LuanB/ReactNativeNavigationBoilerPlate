import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Follow from './screens/Follow';
import ThirdScreen from './screens/ThirdScreen';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Follow: {
      screen: Follow
    },
    ThirdScreen: {
      screen: ThirdScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#BA2F16'
      },
      headerTitleStyle: {
        color: '#FFF'
      }
    }
  }
);

const App = createAppContainer(MainNavigator);
export default App;
