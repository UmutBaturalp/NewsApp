import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {Images, Icons} from '../../assets';
const Details = props => {
  const {navigation, route} = props;
  const {item} = route.params;
  return (
    <SafeAreaView>
      <ImageBackground source={{uri: item.image}} style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image source={Icons.back} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.detailsInfo}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.InfoTypeView}>
              <View style={styles.InfoType}>
                <Text style={styles.InfoTypeText}>Trendy</Text>
              </View>
              <View style={styles.InfoType}>
                <Text style={styles.InfoTypeText}>Crypto</Text>
              </View>
            </View>
            <View style={styles.InfoTitleView}>
              <Text style={styles.InfoTitle}>{item.title}</Text>
            </View>
            <View style={styles.InfoContentHeader}>
              <View style={styles.infoContainerHeaderLeft}>
                <Image source={Images.viruss} style={styles.InfoContentImage} />
                <View style={styles.textView}>
                  <Text style={styles.text1}>EconomicTimes</Text>
                  <Text style={styles.text2}>{item.publishedTime}</Text>
                </View>
              </View>
              <View style={styles.infoContainerHeaderRight}>
                <Image source={Icons.save} style={styles.icon} />
                <Image source={Icons.share} style={styles.icon} />
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.newsText}>
              <Text style={styles.newsContent}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Details;
