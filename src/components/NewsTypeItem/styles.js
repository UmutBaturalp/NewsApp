import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  newsType: {
    backgroundColor: 'white',
    paddingHorizontal: windowWidth * 0.03,
    paddingVertical: windowHeight * 0.01,
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: windowHeight * 0.01,
    marginRight: windowWidth * 0.02,
  },
  newsTypeText: {
    fontSize: windowWidth * 0.045,
    fontWeight: '600',
    color: 'black',
  },
});
