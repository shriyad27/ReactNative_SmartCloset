import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const EventDetailsScreen = ({route}) => {
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
    backgroundColor: '#22223B',
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

export default EventDetailsScreen;
