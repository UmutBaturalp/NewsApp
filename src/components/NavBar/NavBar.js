import {StyleSheet, Text, View, Dimensions, StatusBar} from 'react-native';
import React from 'react';
import NavBarItem from '../NavBarItem.js/NavBarItem';
import {Icons} from '../../assets';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
const NavBar = props => {
  const {navBarItem, navigation} = props;
  return (
    <View>
      <View style={styles.navBar}>
        <NavBarItem
          icon={Icons.home}
          isActive={navBarItem === 'home' ? true : false}
          onPress={() => navigation.navigate('Home')}
          navigation={navigation}
        />
        <NavBarItem
          icon={Icons.fire}
          isActive={navBarItem === 'trends' ? true : false}
          navigation={navigation}
          onPress={() => navigation.navigate('Trends')}
        />
        <NavBarItem
          icon={Icons.search}
          isActive={navBarItem === 'search' ? true : false}
          navigation={navigation}
          onPress={() => navigation.navigate('SearchScreen')}
        />
        <NavBarItem
          icon={Icons.save}
          isActive={navBarItem === 'saved' ? true : false}
          navigation={navigation}
          onPress={() => navigation.navigate('SavedScreen')}
        />
        <NavBarItem
          icon={Icons.pp}
          isActive={navBarItem === 'profile' ? true : false}
          navigation={navigation}
          onPress={() => navigation.navigate('ProfileScreen')}
        />
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBar: {
    width: windowWidth,
    height: windowHeight * 0.05,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: windowWidth * 0.075,
    borderTopWidth: 0.4,
    borderColor: 'gray',
  },
});
