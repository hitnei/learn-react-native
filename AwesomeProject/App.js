import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HelloWorld = (props) => {
  return (
    <View>
      <Text>Hello {props.name}</Text>
    </View>
  );
};
export default class App extends Component {
  render() {
    return (
      <View style={[styles.center]}>
        <HelloWorld name="A"></HelloWorld>
        <HelloWorld name="A"></HelloWorld>
        <HelloWorld name="A"></HelloWorld>
      </View>
    );
  }
}
