import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
import {DATA} from '../../assets/Contans';
console.log(DATA);

const Deneme = () => {
  const [counter, setCounter] = useState(0);
  const solaKaydirma = () => {
    setCounter(counter + 1);
    if (counter + 2 === DATA.length - 1) {
      setCounter(0);
    }
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <Image source={{uri: DATA[counter - 1].image}} style={styles.image} />
        </View>
        <TouchableOpacity onPress={solaKaydirma} style={styles.center}>
          <Image source={{uri: DATA[counter].image}} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.right}>
          <Image source={{uri: DATA[counter + 1].image}} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

export default Deneme;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    height: windowHeight,
  },

  wrapper: {
    width: windowWidth * 0.95,
    height: windowHeight * 0.3,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  left: {
    width: windowWidth * 0.475,
    height: windowHeight * 0.3,
    backgroundColor: 'blue',
  },

  right: {
    width: windowWidth * 0.475,
    height: windowHeight * 0.3,
    backgroundColor: 'red',
  },
  center: {
    width: windowWidth * 0.65,
    height: windowHeight * 0.34,
    backgroundColor: 'black',
    position: 'absolute',
    left: windowWidth * 0.15,
    bottom: windowHeight * -0.02,
    zIndex: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
