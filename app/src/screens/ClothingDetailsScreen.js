import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ClothingDetailsScreen = ({route}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      {/* Render other attributes here, e.g. <Text style={styles.attribute}>Size: {item.size}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  attribute: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default ClothingDetailsScreen;
