import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import ClothingList from '../components/ClothingList';
import SearchBar from '../components/SearchBar';

const HomeScreen = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const clothingData = [
    // Add your clothing data here with attributes
    // Example: { id: 1, name: 'T-Shirt', image: 'https://example.com/tshirt.jpg', ... },

    {
      id: 1,
      name: 'T-Shirt',
      image: 'https://via.placeholder.com/150/92c952',
      size: 'M',
      color: 'Green',
      brand: 'Brand A',
      price: 25.99,
    },
    {
      id: 2,
      name: 'Jeans',
      image: 'https://via.placeholder.com/150/771796',
      size: '32',
      color: 'Blue',
      brand: 'Brand B',
      price: 79.99,
    },
    {
      id: 3,
      name: 'Sweater',
      image: 'https://via.placeholder.com/150/24f355',
      size: 'L',
      color: 'Red',
      brand: 'Brand C',
      price: 45.99,
    },
    {
      id: 4,
      name: 'Jacket',
      image: 'https://via.placeholder.com/150/d32776',
      size: 'XL',
      color: 'Black',
      brand: 'Brand D',
      price: 120.0,
    },
  ];

  const filteredData = clothingData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <SafeAreaView>
      <SearchBar value={searchTerm} onChangeText={setSearchTerm} />
      <ClothingList
        data={filteredData}
        onItemPress={item => navigation.navigate('ClothingDetails', {item})}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
