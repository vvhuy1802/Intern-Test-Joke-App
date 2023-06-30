import {Text, View, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.img_logo}
        />
        <View style={styles.container_user}>
          <View>
            <Text style={styles.infor_title}>Handicrafted by</Text>
            <Text style={styles.infor_name}>Jim HLS</Text>
          </View>
          <Image
            source={require('../../assets/images/avatar.jpeg')}
            style={styles.img_avatar}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
