import {View, SafeAreaView, Dimensions, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  WellcomeSection,
  NewsTypeList,
  NewsList,
  NavBar,
  News,
} from '../../components';
import {newsTypes, DATA} from '../../assets/Contans/index';
import {PlaceApi, Not} from '../../service';

const Home = props => {
  const {navigation} = props;
  const country = 'tr';
  const tag = 'general';
  const urlSent = `?country=${country}&tag=${tag}`;
  const payload = {
    title: 'Blog Title',
    body: 'lorem ipsum',
    userId: 1,
  };
  const [news, setNews] = useState([]);

  const data = () => {
    PlaceApi.getNewsApi(urlSent)
      .then(data => {
        console.log('data', data);
        setNews(data.result);
        console.log('news', news);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  };

  useEffect(() => {
    data();
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <WellcomeSection />
          {news && <News navigation={navigation} DATA={news} />}
          <NewsTypeList data={newsTypes} />
          {news && <NewsList navigation={navigation} data={news} />}
        </ScrollView>
      </View>
      <NavBar navBarItem="home" navigation={navigation} />
    </SafeAreaView>
  );
};
export default Home;
