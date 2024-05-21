import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NewsItem from '../NewsItem/NewsItem';
const NewsList = props => {
  const {data, navigation} = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <NewsItem navigation={navigation} item={item} />
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
