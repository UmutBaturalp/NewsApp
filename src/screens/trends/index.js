import {View, SafeAreaView, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  NavBar,
  Header2,
  NewsTypeSection,
  NewsList,
  Header,
} from '../../components';
import {newsTypes, DATA} from '../../assets/Contans';
const TrendsScreen = props => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <Header2 />
        <NewsTypeSection data={newsTypes} />
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Top reads of the day</Text>
        </View>
        <NewsList data={DATA} navigation={navigation} />
      </View>
      <NavBar navBarItem="trends" navigation={navigation} />
    </SafeAreaView>
  );
};

export default TrendsScreen;
