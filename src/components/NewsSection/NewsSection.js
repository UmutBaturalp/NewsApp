import {Text, View, ImageBackground, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import {Images} from '../../assets';
const windowWidth = Dimensions.get('window').width;
const NewsSection = () => {
  return (
    <View>
      <View style={styles.newsSection}>
        <ImageBackground
          borderRadius={windowWidth * 0.04}
          source={Images.viruss}
          style={styles.newsImage}>
          <Text style={styles.newsText}>
            Covid-19 ICMR studying vaccine effect on Delta plus. results likely
            soon
          </Text>
        </ImageBackground>
      </View>
    </View>
  );
};

export default NewsSection;
