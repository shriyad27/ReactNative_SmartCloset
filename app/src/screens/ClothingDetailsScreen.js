import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import BleManager from 'react-native-ble-manager';

const ClothingDetailsScreen = ({route}) => {
  const writeCharacteristic = async (
    peripheralId,
    serviceUUID,
    characteristicUUID,
    value,
  ) => {
    try {
      const integer = value;
      const integerBytes = new Int8Array([integer]);
      await BleManager.write(
        peripheralId,
        serviceUUID,
        characteristicUUID,
        integerBytes.buffer,
      );
      console.log('Wrote integer:', integer);
    } catch (error) {
      console.error('Error writing characteristic:', error);
    }
  };

  const {item, PID, SERVICE_UUID, CHARACTERISTIC_UUID} = route.params;

  console.log(route);
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.attribute}>Size: {item.size}</Text>
      <Text style={styles.attribute}>Color: {item.color}</Text>
      <Text style={styles.attribute}>Brand: {item.brand}</Text>
      <Text style={styles.attribute}>Event: {item.event}</Text>
      {/* Render other attributes here, e.g. <Text style={styles.attribute}>Size: {item.size}</Text> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          writeCharacteristic(
            PID,
            SERVICE_UUID,
            CHARACTERISTIC_UUID,
            item.hanger,
          )
        }>
        <Text style={styles.buttonText}>Find</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#22223B',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    resizeMode: 'contain',
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
  button: {
    backgroundColor: '#4A4E69',
    padding: 18,
    borderRadius: 5,
    marginVertical: 10,
    marginTop: 'auto',
    width: 230,
    minWidth: 150,
    height: 75,
  },
  buttonText: {
    color: '#F2E9E4',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ClothingDetailsScreen;
