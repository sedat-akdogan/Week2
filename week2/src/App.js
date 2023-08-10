import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './style/styles';
import Login from './components/Login';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Login />
      </SafeAreaView>
    );
  }
}
