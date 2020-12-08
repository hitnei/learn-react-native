import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';

const App = () => {
  var [text, setText] = useState('');

  const onHandleChangeText = (textInput) => {
    setText('🍕'.repeat(textInput.trim().split(' ').length));
  };

  return (
    <View style={{padding: 30}}>
      <TextInput
        placeholder="Enter text"
        onChangeText={(text) => onHandleChangeText(text)}
        style={{
          borderBottomWidth: 1,
          paddingBottom: 1,
          borderBottomColor: '#cccccc',
        }}
      />
      <Text>{text}</Text>
    </View>
  );
};

export default App;
