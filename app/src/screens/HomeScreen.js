import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import ClothingList from '../components/ClothingList';
import SearchBar from '../components/SearchBar';
import AddItemButton from '../components/AddItemButton';
import AddItemScreen from '../screens/AddItemScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getData(setData) {
  try {
    const keys = await AsyncStorage.getAllKeys();
    let data = [];
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] !== 'Welcome') {
        const value = await AsyncStorage.getItem(keys[i]);
        data.push(JSON.parse(value));
        console.log(value);
      }
    }
    setData(data);
  } catch (e) {
    console.log(e);
  }
}

const HomeScreen = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('AddItemScreen');
  };

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getData(setData);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const clothingData = [
    // Add your clothing data here with attributes
    // Example: { id: 1, name: 'T-Shirt', image: 'https://example.com/tshirt.jpg', ... },

    {
      id: 1,
      name: 'T-Shirt',
      image: require('../assets/suit.jpg'),
      size: 'M',
      color: 'Green',
      brand: 'Brand A',
      price: 25.99,
      event: 'Casual',
    },
    {
      id: 2,
      name: 'TT-Shirt',
      image: require('../assets/suit.jpg'),
      size: 'M',
      color: 'Green',
      brand: 'Brand A',
      price: 25.99,
      event: 'Casual',
    },
    {
      id: 3,
      name: 'TTT-Shirt',
      image: require('../assets/suit.jpg'),
      size: 'M',
      color: 'Green',
      brand: 'Brand A',
      price: 25.99,
      event: 'Casual',
    },
    {
      id: 4,
      name: 'TTTT-Shirt',
      image: require('../assets/suit.jpg'),
      size: 'M',
      color: 'Green',
      brand: 'Brand A',
      price: 25.99,
      event: 'Casual',
    },
    {
      id: 5,
      name: 'T-Shirt',
      image: require('../assets/suit.jpg'),
      size: 'M',
      color: 'Green',
      brand: 'Brand A',
      price: 25.99,
      event: 'Casual',
    },
    {
      id: 6,
      name: 'T-Shirt',
      image: require('../assets/suit.jpg'),
      size: 'M',
      color: 'Green',
      brand: 'Brand A',
      price: 25.99,
      event: 'Casual',
    },
    {
      id: 7,
      name: 'T-Shirt',
      image: require('../assets/suit.jpg'),
      size: 'M',
      color: 'Green',
      brand: 'Brand A',
      price: 25.99,
      event: 'Casual',
    },
    // {
    //   id: 2,
    //   name: 'Jeans',
    //   image: 'https://via.placeholder.com/150/771796',
    //   size: '32',
    //   color: 'Blue',
    //   brand: 'Brand B',
    //   price: 79.99,
    //   event: 'Formal',
    // },
    // {
    //   id: 3,
    //   name: 'Sweater',
    //   image: 'https://via.placeholder.com/150/24f355',
    //   size: 'L',
    //   color: 'Red',
    //   brand: 'Brand C',
    //   price: 45.99,
    //   event: 'Casual',
    // },
    // {
    //   id: 4,
    //   name: 'Jacket',
    //   image: 'https://via.placeholder.com/150/d32776',
    //   size: 'XL',
    //   color: 'Black',
    //   brand: 'Brand D',
    //   price: 120.0,
    //   event: 'Party',
    // },
  ];

  /*const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );*/
  // make the button show up at the bottom of the screen
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SearchBar value={searchTerm} onChangeText={setSearchTerm} />
        <ClothingList
          data={data}
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
    height: 10000,
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

export default HomeScreen;
