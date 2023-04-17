import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ClothingDetailsScreen = ({route}) => {
  const {item} = route.params;
  console.log('TEST', item);
  return (
    <View style={styles.container}>
      <Image src={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.attribute}>Size: {item.size}</Text>
      <Text style={styles.attribute}>Color: {item.color}</Text>
      <Text style={styles.attribute}>Brand: {item.brand}</Text>
      <Text style={styles.attribute}>Event: {item.event}</Text>
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
    alignSelf: 'center',
    fontFamily: 'serif',
  },
  attribute: {
    fontSize: 18,
    marginBottom: 5,
    alignSelf: 'center',
    fontFamily: 'serif',
  },
});

export default ClothingDetailsScreen;
