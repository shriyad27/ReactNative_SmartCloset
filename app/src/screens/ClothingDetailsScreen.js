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
  console.log(item);
  console.log(route);
  return (
    <View style={styles.container}>
      <Image source={{uri: `file://${item.image}`}} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
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
    //width: '100%',
    //height: 400,
    //marginBottom: 10,
    //resizeMode: 'contain',
    //marginTop: 25,
    
    width: '70%',
    height: '70%',
    //resizeMode: 'contain',
    borderRadius: 10,
    borderColor: '#F2E9E4',
    borderWidth: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
    color: '#F2E9E4',
    fontFamily: 'serif',

  },
  attribute: {
    fontSize: 18,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#4A4E69',
    padding: 18,
    borderRadius: 10,
    marginVertical: 25,
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
    fontFamily: 'serif',
    fontSize: 20,
  },
});

export default ClothingDetailsScreen;
