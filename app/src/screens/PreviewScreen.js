// PreviewScreen.js
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const PreviewScreen = ({route}) => {
  const {imageData} = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'file://' + imageData.path}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22223B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default PreviewScreen;
