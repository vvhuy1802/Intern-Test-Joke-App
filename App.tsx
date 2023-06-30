/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import HomeScreen from './src/views/HomeScreen';

function App(): JSX.Element {
  return (
    <View style={{
      flex: 1,
    }}>
      <HomeScreen />
    </View>
  );
}

export default App;
