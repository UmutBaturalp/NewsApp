import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
export default styles = StyleSheet.create({
  newsSection: {
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: windowHeight * 0.02,
    backgroundColor: '#fff',
  },

  newsImage: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.35,
    paddingHorizontal: windowWidth * 0.05,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: '4%',
  },
  newsText: {
    color: '#fff',
    fontSize: windowWidth * 0.035,
    textAlign: 'left',
    fontWeight: '500',
  },
});
