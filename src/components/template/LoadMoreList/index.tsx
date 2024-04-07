import {ILoadMore} from './types';
import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {CharacterCard} from '@/components/molecules';
const LoadMoreList: React.FunctionComponent<ILoadMore.Props> = props => {
  const {items, onPress, isLoading, handleLoadMore} = props;

  return (
    <FlatList
      key={'_'}
      data={items}
      renderItem={item => (
        <CharacterCard
          key={item.index}
          item={item.item}
          onPress={item => {
            onPress(item);
          }}
        />
      )}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      ListFooterComponent={
        isLoading ? <ActivityIndicator size="large" color={'red'} /> : null
      } // Show loading indicator at the end of the list
      onEndReachedThreshold={0.1} // Trigger onEndReached when 10% from the bottom
      onEndReached={handleLoadMore} // Fetch more data when reaching the end of the list
      numColumns={2} // Display two columns
    />
  );
};

export default LoadMoreList;
