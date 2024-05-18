import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const NewsTypeItem = props => {
  const {item} = props;
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.newsType}>
          <Text style={styles.newsTypeText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewsTypeItem;
