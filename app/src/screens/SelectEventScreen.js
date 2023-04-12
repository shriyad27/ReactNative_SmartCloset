import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import ClothingList from '../components/ClothingList';
import SearchBar from '../components/SearchBar';
import AddItemButton from '../components/AddItemButton';
import AddItemScreen from '../screens/AddItemScreen';

const SelectEventScreen = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('SelectEventScreen');
  };

  const [searchTerm, setSearchTerm] = useState('');

  const clothingData = [
    // Add your clothing data here with attributes
    // Example: { id: 1, name: 'T-Shirt', image: 'https://example.com/tshirt.jpg', ... },
  ];

  const filteredData = clothingData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  // make the button show up at the bottom of the screen
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SearchBar value={searchTerm} onChangeText={setSearchTerm} />
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 1000,
    backgroundColor: '#22223B',
  },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#1A1A2D',
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#22223B',
//     borderTopWidth: 1,
//     borderTopColor: '#F2E9E4',
//     paddingVertical: 0,
//     marginTop: 610,
//   },
});

export default SelectEventScreen;
