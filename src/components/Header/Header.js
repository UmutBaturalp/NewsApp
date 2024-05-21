import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icons} from '../../assets/';

const Header = props => {
  const {} = props;
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.inputSection}>
          <TextInput
            style={styles.input}
            placeholder="Search News"
            placeholderTextColor={'#666'}
          />
          <TouchableOpacity>
            <Image
              source={Icons.search}
              style={styles.searchIcon}
              tintColor={'#000'}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image
            source={Icons.menu}
            style={styles.menuIcon}
            tintColor={'#000'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
