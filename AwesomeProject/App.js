import React, {useState} from 'react';
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

const App = () => {
  var [count, setCount] = useState(1);

  return (
    <View style={[styles.center]}>
      <Text>{count}</Text>
      <View>
        <Button
          onPress={() => {
            setCount(count + 1);
          }}
          title="insc"
        />
        <Button
          onPress={() => {
            setCount(count - 1);
          }}
          title="desc"
        />
      </View>
    </View>
  );
};

export default App;
