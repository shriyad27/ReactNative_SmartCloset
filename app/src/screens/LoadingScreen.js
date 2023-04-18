import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import WelcomeButton from '../components/WelcomeButton';

const WelcomeScreen = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('WelcomeScreen');
  };

  // make the button show up at the bottom of the screen
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../components/Vestilogo.jpg')}
        />
        <View style={styles.buttonContainer}>
          <ActivityIndicator size={70} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 1000,
    backgroundColor: '#1A1A2D',
    //borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#1A1A2D',
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 610,
  },
  logo: {
    //width: 300,
    borderRadius: 10,
    marginTop: -700,
  },
});

export default WelcomeScreen;
