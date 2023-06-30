import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonVote = ({id, title, color, handleVote}) => {
  return (
    <TouchableOpacity
      onPress={() => handleVote(id)}
      style={{
        backgroundColor: color,
        width: 120,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 13,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonVote;

const styles = StyleSheet.create({});
