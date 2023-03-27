import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import ClothingList from '../components/ClothingList';
import SearchBar from '../components/SearchBar';

const HomeScreen = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const clothingData = [
    // Add your clothing data here with attributes
    // Example: { id: 1, name: 'T-Shirt', image: 'https://example.com/tshirt.jpg', ... },
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
