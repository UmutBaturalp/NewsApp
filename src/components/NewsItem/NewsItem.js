import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
const NewsItem = props => {
  const {item, navigation} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {item});
      }}
      activeOpacity={0.8}
      style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.contentDate}>
            <Text style={styles.date}>{item.publishedTime}</Text>
            <Text style={styles.date}>{item.publishedDate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;
