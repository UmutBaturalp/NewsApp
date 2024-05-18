import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
export default styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: windowHeight * 0.1,
    justifyContent: 'center',
    paddingHorizontal: windowWidth * 0.05,
  },

  headerTitle: {
    fontSize: windowWidth * 0.07,
    fontWeight: '600',
    color: 'black',
    letterSpacing: 0.3,
  },

  headerDesc: {
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
    color: 'black',
  },
});
