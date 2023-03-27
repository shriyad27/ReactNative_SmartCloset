import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const ClothingItem = ({imageSrc, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{uri: imageSrc}} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 150,
  },
});

export default ClothingItem;
