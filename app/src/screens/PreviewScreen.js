// PreviewScreen.js
import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveImage(imageData, name) {
  try {
    const fileName = `image-${Date.now()}.jpg`;
    const path = `${RNFS.DocumentDirectoryPath}/${fileName}`;
    await RNFS.moveFile('file://' + imageData.path, path);

    const clothes = {name: name, image: path};
    const clothesString = JSON.stringify(clothes);
    await AsyncStorage.setItem(fileName, clothesString);

    console.log('Saved image to', path);
  } catch (e) {
    console.log(e);
  }
}

const PreviewScreen = ({route}) => {
  const {imageData} = route.params;

  const [name, setName] = React.useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'file://' + imageData.path}} />
      <View style={{width: '100%', alignItems: 'center'}}>
        <Text>Name:</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => setName(text)}
          value={name}
          placeholder="e.g. Blue T-shirt"
        />
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => saveImage(imageData, name)}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22223B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
  },
  textinput: {
    backgroundColor: '#4A4E69',
    color: '#F2E9E4',
    width: '80%',
    height: 40,
    borderRadius: 10,
    padding: 10,
    borderColor: '#F2E9E4',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4A4E69',
    color: '#F2E9E4',
    width: '80%',
    height: 40,
    borderRadius: 10,
    padding: 10,
    borderColor: '#F2E9E4',
  },
});

export default PreviewScreen;
