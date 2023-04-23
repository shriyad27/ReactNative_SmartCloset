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
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Image
            style={styles.logo}
            source={require('../components/Vestilogo.jpg')}
          />
        </View>
        <View>
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
    flex: 1,
    backgroundColor: '#1A1A2D',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    //width: 300,
    borderRadius: 10,
    marginBottom: 100,
  },
});

export default WelcomeScreen;
