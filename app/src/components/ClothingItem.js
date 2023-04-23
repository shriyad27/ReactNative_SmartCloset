import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const ClothingItem = ({imageSrc, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{uri: `file://${imageSrc}`}} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  image: {
    //width: '100%',
    //height: 200,
    width: '100%',
    height: 300,
    borderRadius: 10,
    borderColor: '#F2E9E4',
    borderWidth: 4,
    //resizeMode: 'contain',
  },
});

export default ClothingItem;
