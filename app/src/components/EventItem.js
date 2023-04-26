import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
async function getData() {
  try {
    const keys = await AsyncStorage.getAllKeys();
    let data = [];
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] !== 'Welcome') {
        const value = await AsyncStorage.getItem(keys[i]);
        data.push(JSON.parse(value));
      }
    }
    //convert data to {name: 'item.name', id': 'item.id'}, ...
    for (let i = 0; i < data.length; i++) {
      data[i] = {name: data[i].name, id: data[i].id};
    }
    //convert data to string
    data = JSON.stringify(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}

const API = async (name, setLoading, navigation) => {
  const formData = new FormData();
  const data = await getData();
  formData.append('user_data', name);
  formData.append('clothes', data);
  setLoading(true);
  const response = await fetch('http://127.0.0.1:5000/api', {
    method: 'POST',
    body: formData,
    header: {
      'Content-type': 'application/json',
    },
  });
  const json = await response.json().then(r => {
    //separate the response strings into an array based on commas, and remove all spaces
    let responses = r.response.split(',');
    for (let i = 0; i < responses.length; i++) {
      responses[i] = responses[i].replace(/\s/g, '');
    }
    setLoading(false);
    console.log('test ' + responses);
    navigation.navigate('EventScreen', {items: responses, name: name});
  });
};
const EventItem = ({imageSrc, name, setLoading}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => API(name, setLoading, navigation)}
      style={styles.container}>
      <Image source={imageSrc} style={styles.image} />
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
    borderRadius: 10,
    borderColor: '#F2E9E4',
    borderWidth: 4,
  },
});

export default EventItem;
