import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

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
    return data
  } catch (e) {
    console.log(e);
  }
}

const API = async name => {
  const formData = new FormData();
  formData.append('user_data', name);
  formData.append('clothes', getData())

  const response = await fetch('http://127.0.0.1:5000/api', {
    method: 'POST',
    body: formData,
    header: {
      'Content-type': 'application/json',
    },
  }).then(r => console.log(r.json()));
};

const EventItem = ({imageSrc, name}) => {
  return (
    <TouchableOpacity onPress={() => API(name)} style={styles.container}>
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
    borderWidth: 5,
  },
});

export default EventItem;
