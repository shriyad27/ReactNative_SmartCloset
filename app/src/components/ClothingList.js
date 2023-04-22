import React from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';
import ClothingItem from './ClothingItem';
import {TemporaryDirectoryPath} from 'react-native-fs';

const ClothingList = ({data, onItemPress}) => {
  console.log('data' + data);
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <View style={styles.itemContainer}>
          <ClothingItem
            imageSrc={item.image}
            onPress={() => onItemPress(item)}
          />
        </View>
      )}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      scrollEnabled={true}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    marginBottom: 100,
  },
  itemContainer: {
    flex: 0.5,
    margin: 5,
  },
});

export default ClothingList;
