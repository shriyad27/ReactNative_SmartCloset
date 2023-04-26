import React from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';
import EventItem from './EventItem';

const EventList = ({data, onItemPress, setLoading}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <View style={styles.itemContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <EventItem
            imageSrc={item.image}
            name={item.name}
            setLoading={setLoading}
            onPress={() => onItemPress(item)}
          />
        </View>
      )}
      keyExtractor={item => item.id.toString()}
      scrollEnabled={true}
      numColumns={1}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'serif',
    color: '#F2E9E4',
    padding: 5,
  },
});

export default EventList;
