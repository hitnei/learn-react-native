import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex3: {
    flex: 3,
  },
  flex2: {
    flex: 2,
  },
  flex1: {
    flex: 1,
  },
  marginBottom: {
    marginBottom: 30,
  },
});

// const HelloWorld = (props) => {
//   return (
//     <View>
//       <Text>Hello {props.name}</Text>
//     </View>
//   );
// };

class App extends Component {
  state = {
    count: 0,
  };

  inscCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  descCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <View style={[styles.center]}>
        <Text>{this.state.count}</Text>
        <View>
          <Button onPress={this.inscCount} title="insc" />
          <Button onPress={this.descCount} title="desc" />
        </View>
      </View>
    );
  }
}

export default App;
