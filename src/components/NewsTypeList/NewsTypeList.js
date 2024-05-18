import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import React from 'react';
import NewsTypeItem from '../NewsTypeItem/NewsTypeItem';
const windowWidth = Dimensions.get('window').width;
const NewsTypeList = props => {
  const {data} = props;
  return (
    <View style={styles.newsTypeSection}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({item}) => <NewsTypeItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default NewsTypeList;

const styles = StyleSheet.create({
  newsTypeSection: {
    width: windowWidth,
    alignItems: 'baseline',
    justifyContent: 'center',
    paddingLeft: windowWidth * 0.05,
    backgroundColor: 'white',
  },
});
