import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import BleManager from 'react-native-ble-manager';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ClothingDetailsScreen = ({route}) => {
  const navigation = useNavigation();
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
  const deleteItem = async () => {
    try {
      console.log(item.id.toString());
      await AsyncStorage.removeItem('image-' + item.id.toString() + '.jpg');
      navigation.navigate('Home');
      console.log('Deleted item');
    } catch (e) {
      console.log(e);
    }
  };

  const {item, PID, SERVICE_UUID, CHARACTERISTIC_UUID} = route.params;
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
      <TouchableOpacity style={styles.deleteButton} onPress={deleteItem}>
        <Text style={styles.buttonText}>Delete</Text>
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
    padding: 10,
    borderRadius: 10,
    marginVertical: 25,
    marginTop: 'auto',
    width: 230,
    minWidth: 150,
    height: 50,
    flex: 1.3,
  },
  buttonText: {
    color: '#F2E9E4',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontFamily: 'serif',
    fontSize: 20,
  },
  deleteButton: {
    //background color pastel red
    backgroundColor: '#E63946',
    padding: 10,
    borderRadius: 10,
    marginVertical: 25,
    marginTop: 'auto',
    width: 230,
    flex: 1.3,
    minWidth: 150,
    height: 50,
  },
});

export default ClothingDetailsScreen;
