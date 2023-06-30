import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{
            width: 60,
            height: 40,
            resizeMode: 'contain',
          }}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
              }}>
              Handicrafted by
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'black',
                textAlign: 'right',
              }}>
              Jim HLS
            </Text>
          </View>
          <Image
            source={require('../assets/images/avatar.jpeg')}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              marginLeft: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
  },
});
