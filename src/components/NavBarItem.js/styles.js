import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
export default styles = StyleSheet.create({
  navBarItem: {
    alignItems: 'center',
    rowGap: windowWidth * 0.01,
  },

  navBarIcon: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
  },

  navBarItemLine: {
    width: windowWidth * 0.05,
    height: 2,
    backgroundColor: 'black',
  },
});
