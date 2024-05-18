import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  NewsItem: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.2,
    borderRadius: windowWidth * 0.05,
    marginRight: windowWidth * 0.02,
  },

  image: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: windowWidth * 0.05,
    paddingVertical: windowWidth * 0.01,
  },

  title: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
});
