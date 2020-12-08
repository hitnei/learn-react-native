import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const MyClass = () => {
  return (
    <View style={styles.container}>
      {/* no logic */}
      <FlatList
        data={[
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
          {name: 'Devin'},
        ]}
        renderItem={({item}) => {
          return <Text style={[styles.item]}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
  },
  item: {
    padding: 15,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
});

//make this component available to the app
export default MyClass;
