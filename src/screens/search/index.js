import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {NavBar, NewsTypeSection, NewsList, Header} from '../../components';
import {newsTypes} from '../../assets/Contans';
import {Not, PlaceApi} from '../../service';
const TrendsScreen = props => {
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

    Not.PlaceApi(payload)
      .then(data => {
        console.log('Veri alındı:', data);
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
        <Header />
        <TouchableOpacity
          onPress={() => {
            data();
          }}>
          <Text>Tikla</Text>
        </TouchableOpacity>
        <NewsTypeSection data={newsTypes} />
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Top reads of the day</Text>
        </View>
        <NewsList data={news} navigation={navigation} />
      </View>
      <NavBar navBarItem="search" navigation={navigation} />
    </SafeAreaView>
  );
};

export default TrendsScreen;
