import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  container: {
    width: windowWidth,
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: windowWidth * 0.03,
    borderRadius: windowWidth * 0.03,
    marginVertical: windowHeight * 0.01,
  },

  image: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.22,
    borderRadius: windowWidth * 0.02,
  },

  content: {
    width: windowWidth * 0.55,
    justifyContent: 'space-between',
    height: windowWidth * 0.22,
    paddingVertical: windowWidth * 0.025,
  },

  title: {
    color: 'darkblue',
    fontWeight: '500',
    fontSize: windowWidth * 0.03,
  },

  contentDate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  date: {
    color: 'gray',
    fontWeight: '400',
    fontSize: windowWidth * 0.03,
  },
});
