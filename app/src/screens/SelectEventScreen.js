import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, Touchable} from 'react-native';
import ClothingList from '../components/ClothingList';
import EventList from '../components/EventList';
import SearchBar from '../components/SearchBar';
import AddItemButton from '../components/AddItemButton';
import AddItemScreen from '../screens/AddItemScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LoadingScreen from './LoadingScreen';
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

  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const EventData = [
    // Add your clothing data here with attributes
    // Example: { id: 1, name: 'T-Shirt', image: 'https://example.com/tshirt.jpg', ... },
    {
      id: 1,
      name: 'Formal',
      image: require('../assets/Professional.jpg'),
    },
    {
      id: 2,
      name: 'Party',
      image: require('../assets/Party.jpg'),
    },
    {
      id: 3,
      name: 'Work Out',
      image: require('../assets/WorkOut.jpg'),
    },
    {
      id: 4,
      name: 'Date',
      image: require('../assets/Date.jpg'),
    },
  ];

  const filteredData = EventData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // make the button show up at the bottom of the screen
  return loading ? (
    <LoadingScreen />
  ) : (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <EventList
          data={filteredData}
          setLoading={setLoading}
          //onItemPress={item => navigation.navigate('EventDetails', {item})}
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
    //justifyContent: 'center',
    //alignItems: 'center',
    //     height: 100,
    flex: 1,
    backgroundColor: '#22223B',
  },
  subContainer: {
    marginTop: 25,
    marginBottom: 25,
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
