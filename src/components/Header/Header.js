import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Icons} from '../../assets/';

const Header = props => {
  const {} = props;
  const [tag, setTag] = useState('');
  console.log(tag);
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.inputSection}>
          <TextInput
            style={styles.input}
            placeholder="Search News"
            placeholderTextColor={'#666'}
            onChangeText={value => setTag(value)}
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
