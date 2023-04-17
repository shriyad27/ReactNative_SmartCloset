import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import EventItem from './EventItem';

const EventList = ({data, onItemPress}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <View style={styles.itemContainer}>
          <EventItem imageSrc={item.image} onPress={() => onItemPress(item)} />
        </View>
      )}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
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
});

export default EventList;
