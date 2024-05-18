import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
  },

  backButton: {
    position: 'absolute',
    top: windowWidth * 0.05,
    left: windowWidth * 0.05,
    width: windowWidth * 0.075,
    height: windowWidth * 0.075,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.015,
  },
  backIcon: {
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
  },

  detailsInfo: {
    width: windowWidth,
    height: windowHeight * 0.5,
    alignItems: 'center',
  },

  //-------------------------------
  InfoTypeView: {
    width: windowWidth * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: windowHeight * 0.01,
    columnGap: windowWidth * 0.02,
  },

  InfoType: {
    backgroundColor: 'white',
    paddingHorizontal: windowWidth * 0.03,
    paddingVertical: windowHeight * 0.005,
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },

  InfoTypeText: {
    fontSize: windowWidth * 0.04,
    fontWeight: '400',
    color: 'black',
  },

  InfoTitleView: {
    width: windowWidth * 0.9,
    paddingVertical: windowWidth * 0.01,
  },

  InfoTitle: {
    fontSize: windowWidth * 0.05,
    color: 'white',
    fontWeight: 'bold',
  },

  //-------------------------------
  InfoContentHeader: {
    width: windowWidth * 0.9,
    paddingVertical: windowHeight * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  infoContainerHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: windowWidth * 0.03,
  },
  InfoContentImage: {
    width: windowWidth * 0.07,
    height: windowWidth * 0.07,
    borderRadius: 100,
  },

  text1: {
    color: '#fff',
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
  },

  text2: {
    color: '#fff',
    fontSize: windowWidth * 0.03,
    fontWeight: 'bold',
  },
  infoContainerHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: windowWidth * 0.03,
  },
  icon: {
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
    tintColor: '#fff',
  },

  line: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.003,
    backgroundColor: 'white',
  },

  newsText: {
    width: windowWidth * 0.9,
    paddingVertical: windowHeight * 0.02,
  },
  newsContent: {
    fontSize: windowWidth * 0.04,
    color: '#fff',
    fontWeight: '500',
  },

  scrollView: {
    width: windowWidth,
    height: windowHeight * 0.5,
  },
});
