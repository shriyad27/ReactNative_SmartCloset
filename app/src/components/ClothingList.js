import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import ClothingItem from './ClothingItem';

const ClothingList = ({data, onItemPress}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <View style={index % 2 === 0 ? styles.row : null}>
          <ClothingItem
            imageSrc={item.image}
            onPress={() => onItemPress(item)}
          />
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
  row: {
    flexDirection: 'row',
  },
});

export default ClothingList;
