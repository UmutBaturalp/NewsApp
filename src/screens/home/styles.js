import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    paddingBottom: windowHeight * 0.05,
    backgroundColor: '#fff',
    paddingTop: windowHeight * 0.02,
  },

  //-------------------------------
});
