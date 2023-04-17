import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, Touchable} from 'react-native';
import ClothingList from '../components/ClothingList';
import EventList from '../components/EventList';
import SearchBar from '../components/SearchBar';
import AddItemButton from '../components/AddItemButton';
import AddItemScreen from '../screens/AddItemScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SelectEventScreen = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('SelectEventScreen');
  };

  const API = async () => {
    const formData = new FormData();
    formData.append('user_data', 'formal');

    const response = await fetch('http://127.0.0.1:5000/api', {
      method: 'POST',
      body: formData,
      header: {
        'Content-type': 'application/json',
      },
    }).then(r => console.log(r.json()));
  };

  const [searchTerm, setSearchTerm] = useState('');

  const EventData = [
    // Add your clothing data here with attributes
    // Example: { id: 1, name: 'T-Shirt', image: 'https://example.com/tshirt.jpg', ... },

    {
      id: 1,
      name: 'Formal',
      image: 'https://via.placeholder.com/150/92c952',
    },
    {
      id: 2,
      name: 'Casual',
      image: 'https://via.placeholder.com/150/771796',
    },
    {
      id: 3,
      name: 'Sport',
      image: 'https://via.placeholder.com/150/24f355',
    },
    // {
    //   id: 4,
    //   name: 'Party',
    //   image: PartyLogo,
    // },
  ];

  const filteredData = EventData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // make the button show up at the bottom of the screen
  return (
    <SafeAreaView>
      <View>
        <SearchBar value={searchTerm} onChangeText={setSearchTerm} />
        <TouchableOpacity onPress={API}>
          <Text>Click me</Text>
        </TouchableOpacity>
        <EventList
          data={filteredData}
          onItemPress={item => navigation.navigate('EventDetails', {item})}
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
  //     height: 100,
       backgroundColor: '#22223B',
  //   },
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

