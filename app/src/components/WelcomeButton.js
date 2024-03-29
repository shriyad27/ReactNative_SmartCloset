import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeButton = ({title, setInitiated}) => {
  const handlePress = async () => {
    setInitiated(true);
    await AsyncStorage.setItem('Welcome', 'true');
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
    backgroundColor: '#4A4E69',
    padding: 18,
    borderRadius: 10,
    marginVertical: 10,
    width: 230,
    minWidth: 150,
    height: 75,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#F2E9E4',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default WelcomeButton;
