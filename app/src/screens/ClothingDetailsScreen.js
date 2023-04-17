import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import BleManager from 'react-native-ble-manager';

const ClothingDetailsScreen = ({route}) => {

const writeCharacteristic = async (peripheralId, serviceUUID, characteristicUUID, value) => {
  try {
    const integer = value;
    const integerBytes = new Int8Array([integer]);
    await BleManager.write(peripheralId, serviceUUID, characteristicUUID, integerBytes.buffer);
    console.log('Wrote integer:', integer);
  } catch (error) {
    console.error('Error writing characteristic:', error);
  }
};

  const {item, PID, SERVICE_UUID, CHARACTERISTIC_UUID} = route.params;

  console.log(item);
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      {/* Render other attributes here, e.g. <Text style={styles.attribute}>Size: {item.size}</Text> */}
      <TouchableOpacity onPress={writeCharacteristic(PID, SERVICE_UUID, CHARACTERISTIC_UUID, item.hanger)}>Find</TouchableOpacity>
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
  },
  attribute: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default ClothingDetailsScreen;
