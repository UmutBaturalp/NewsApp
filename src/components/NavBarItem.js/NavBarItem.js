import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
const NavBarItem = props => {
  const {icon, isActive, navigation, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.navBarItem}>
        <Image source={icon} style={styles.navBarIcon} />
        {isActive ? <View style={styles.navBarItemLine}></View> : null}
      </View>
    </TouchableOpacity>
  );
};

export default NavBarItem;
