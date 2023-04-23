// PreviewScreen.js
import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

async function saveImage(imageData, name, navigation) {
  try {
    const date = Date.now();
    const fileName = `image-${date}.jpg`;
    const path = `${RNFS.DocumentDirectoryPath}/${fileName}`;
    await RNFS.moveFile('file://' + imageData.path, path);

    const clothes = {name: name, image: path, id: date};
    const clothesString = JSON.stringify(clothes);
    await AsyncStorage.setItem(fileName, clothesString);

    console.log('Saved image to', path);
    navigation.navigate('Closet');
  } catch (e) {
    console.log(e);
  }
}

const PreviewScreen = ({route}) => {
  const navigation = useNavigation();
  const {imageData} = route.params;

  const [name, setName] = React.useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'file://' + imageData.path}} />
      <View style={{width: '100%', alignItems: 'center'}}>
        <Text style={styles.intro}>Name:</Text>
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
          onPress={() => saveImage(imageData, name, navigation)}>
          <Text style={styles.saveButton}>Save</Text>
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
    width: '70%',
    height: '70%',
    //resizeMode: 'contain',
    borderRadius: 10,
    borderColor: '#F2E9E4',
    borderWidth: 5,
  },
  intro: {
    fontFamily: 'serif',
    color: '#F2E9E4',
    fontSize: 15,
    paddingTop: 15,
    paddingBottom: 10,
  },
  textinput: {
    backgroundColor: '#4A4E69',
    color: '#F2E9E4',
    width: '80%',
    height: 40,
    borderRadius: 10,
    padding: 10,
    borderColor: '#F2E9E4',
    fontFamily: 'serif',
  },
  saveButton: {
    fontFamily: 'serif',
    color: '#F2E9E4',
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4A4E69',
    color: '#F2E9E4',
    width: 100,
    height: 40,
    borderRadius: 10,
    padding: 10,
    borderColor: '#F2E9E4',
  },
});

export default PreviewScreen;
