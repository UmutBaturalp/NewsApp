import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
const WellcomeSection = () => {
  return (
    <View>
      <View style={styles.wellcomeSection}>
        <Text style={styles.wellcomeTitle}>Good Morning</Text>
        <Text style={styles.wellcomeDescription}>
          Explore the world by one click
        </Text>
      </View>
    </View>
  );
};

export default WellcomeSection;
