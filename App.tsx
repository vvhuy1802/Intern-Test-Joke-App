import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeScreen from './src/views/HomeScreen/HomeScreen';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
