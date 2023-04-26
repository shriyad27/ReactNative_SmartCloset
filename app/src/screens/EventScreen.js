import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import ClothingList from '../components/ClothingList';
import SearchBar from '../components/SearchBar';
import AddItemButton from '../components/AddItemButton';
import AddItemScreen from '../screens/AddItemScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
//use useFocus to refresh the page
import {useFocusEffect} from '@react-navigation/native';

async function getData(setData, items) {
  try {
    const keys = await AsyncStorage.getAllKeys();
    let data = [];
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] !== 'Welcome') {
        const value = await AsyncStorage.getItem(keys[i]);
        let item = JSON.parse(value);
        if (items.includes(item.id.toString())) {
          data.push(JSON.parse(value));
        }
      }
    }
    setData(data);
  } catch (e) {
    console.log(e);
  }
}

const EventScreen = ({navigation, route}) => {
  const {items, name} = route.params;
  useFocusEffect(
    React.useCallback(() => {
      getData(setData, items);
    }, []),
  );

  const [data, setData] = React.useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  // make the button show up at the bottom of the screen
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#F2E9E4',
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 10,
          }}>
          {name}
          {' Outfit'}
        </Text>
        <ClothingList
          data={filteredData}
          onItemPress={item => navigation.navigate('ClothingDetails', {item})}
        />
        {/* <View style={styles.buttonContainer}>
          <AddItemButton title="Go to add item page" onPress={handlePress} navigation={navigation}/>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22223B',
    flex: 1,
    // height: 10000,
  },
  subContainer: {
    marginBottom: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#1A1A2D',
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#22223B',
    borderTopWidth: 1,
    borderTopColor: '#F2E9E4',
    paddingVertical: 0,
    marginTop: 700,
  },
});

export default EventScreen;
