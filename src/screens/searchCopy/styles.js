import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    paddingBottom: windowHeight * 0.05,
  },

  //-------------------------------

  infoSection: {
    width: windowWidth,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.01,
  },

  infoTitle: {
    color: 'black',
    fontSize: windowWidth * 0.06,
    fontWeight: '600',
  },
});
