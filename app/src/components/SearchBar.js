import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Search clothing items..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  input: {
    backgroundColor: '#EEE',
    borderRadius: 5,
    padding: 5,
    fontSize: 16,
  },
});

export default SearchBar;
