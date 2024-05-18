import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
export default styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: windowHeight * 0.1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.05,
  },

  inputSection: {
    width: windowWidth * 0.75,
    height: windowHeight * 0.05,
    backgroundColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: windowWidth * 0.03,
    paddingRight: '4%',
  },

  input: {
    width: windowWidth * 0.6,
    height: '100%',
    borderRadius: windowWidth * 0.03,
    paddingHorizontal: windowWidth * 0.03,
    color: 'black',
    fontSize: windowWidth * 0.035,
    fontWeight: '700',
  },

  searchIcon: {
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
  },
  menuIcon: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
  },
});
