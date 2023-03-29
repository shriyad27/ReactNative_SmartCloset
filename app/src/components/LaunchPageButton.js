import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const AddItemButton = ({ title, onPress, navigation }) => {
  const handlePress = () => {
    navigation.navigate('LaunchPage')
  };

  return (
    <View>
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 150,
    minWidth: 150,
    height: 50,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LaunchPageButton;
