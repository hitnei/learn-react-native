import React, {Component, useState} from 'react';
import {Text, View, Button} from 'react-native';

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>My name is {props.name}</Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Feel Cat' : 'Full'}
      />
    </View>
  );
};

class App extends Component {
  render() {
    return (
      <View>
        <Cat name="Bob" />
        <Cat name="Vui" />
      </View>
    );
  }
}

export default App;
