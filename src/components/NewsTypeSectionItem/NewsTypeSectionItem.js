import {Text, View, ImageBackground, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
const windowWidth = Dimensions.get('window').width;
const NewsTypeSectionItem = props => {
  const {item} = props;
  return (
    <View>
      <View style={styles.NewsItem}>
        <ImageBackground
          source={{uri: item.image}}
          style={styles.image}
          borderRadius={windowWidth * 0.05}>
          <Text style={styles.title}>{item.name}</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

export default NewsTypeSectionItem;
