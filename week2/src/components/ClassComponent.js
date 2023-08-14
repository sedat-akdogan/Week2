import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    this.setState({x: 0}); // will be rendered everytime
    return (
      <View>
        <Text>Class Component</Text>
      </View>
    );
  }
}
