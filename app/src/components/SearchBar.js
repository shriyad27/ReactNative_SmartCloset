import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Search items..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 25,
    paddingBottom: 25,
    color: '#F2E9E4',
  },
  input: {
    backgroundColor: '#525954',
    borderRadius: 10,
    padding: 5,
    fontSize: 16,
    fontFamily: 'serif',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default SearchBar;
