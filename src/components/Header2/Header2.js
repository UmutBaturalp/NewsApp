import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
const Header2 = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Walk with Trend</Text>
        <Text style={styles.headerDesc}>Don't stay behind, read the trend</Text>
      </View>
    </View>
  );
};

export default Header2;
