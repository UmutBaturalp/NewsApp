import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import React from 'react';
import NewsTypeSectionItem from '../NewsTypeSectionItem/NewsTypeSectionItem';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
const NewsTypeSection = props => {
  const {data} = props;
  return (
    <View style={styles.News}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <NewsTypeSectionItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default NewsTypeSection;

const styles = StyleSheet.create({
  News: {
    width: windowWidth,
    paddingLeft: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.02,
  },
});
