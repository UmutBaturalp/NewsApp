import {View, SafeAreaView, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  Header,
  WellcomeSection,
  NewsSection,
  NewsTypeList,
  NewsList,
  NavBar,
  News,
} from '../../components';
import {newsTypes, DATA} from '../../assets/Contans/index';
console.log(newsTypes);
const Home = props => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <WellcomeSection />
          <News DATA={DATA} />
          <NewsTypeList data={newsTypes} />
          <NewsList navigation={navigation} data={DATA} />
        </ScrollView>
      </View>
      <NavBar navBarItem="home" navigation={navigation} />
    </SafeAreaView>
  );
};
export default Home;
