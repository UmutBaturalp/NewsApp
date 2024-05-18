import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
export default styles = StyleSheet.create({
  wellcomeSection: {
    width: windowWidth,
    alignItems: 'baseline',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: windowWidth * 0.05,
  },

  wellcomeTitle: {
    fontSize: windowWidth * 0.08,
    fontWeight: '600',
    color: 'black',
    letterSpacing: 0.5,
  },

  wellcomeDescription: {
    fontSize: windowWidth * 0.045,
    fontWeight: '400',
    color: 'black',
  },
});
