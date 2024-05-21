import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useCallback} from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

const News = props => {
  const {DATA} = props;
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(2);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => {
          counter === 0 ? setCounter(DATA.length - 1) : setCounter(counter - 1);

          counter1 === 0
            ? setCounter1(DATA.length - 1)
            : setCounter1(counter1 - 1);

          counter2 === 0
            ? setCounter2(DATA.length - 1)
            : setCounter2(counter2 - 1);
        }}
        style={styles.left}>
        <Image
          borderRadius={windowWidth * 0.05}
          source={{uri: DATA[counter].image}}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.center}>
        <Image
          source={{
            uri: DATA[counter1].image,
          }}
          style={styles.image}
          borderRadius={windowWidth * 0.05}
        />
        <Text style={styles.newsText}>{DATA[counter1].name}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setCounter((counter + 1) % DATA.length);
          setCounter1((counter1 + 1) % DATA.length);
          setCounter2((counter2 + 1) % DATA.length);
        }}
        style={styles.right}>
        <Image
          borderRadius={windowWidth * 0.05}
          source={{
            uri: DATA[counter2].image,
          }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  wrapper: {
    width: windowWidth * 0.95,
    height: windowHeight * 0.34,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: windowHeight * 0.01,
  },
  left: {
    width: windowWidth * 0.475,
    height: windowHeight * 0.3,
    borderRadius: windowWidth * 0.05,
  },

  right: {
    width: windowWidth * 0.475,
    height: windowHeight * 0.3,
    backgroundColor: 'red',
    borderRadius: windowWidth * 0.05,
  },
  center: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.34,
    position: 'absolute',
    zIndex: 2,
    left: windowWidth * 0.125,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  newsText: {
    color: '#fff',
    fontSize: windowWidth * 0.035,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
