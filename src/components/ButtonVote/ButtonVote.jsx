import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

const ButtonVote = ({id, title, color, handleVote}) => {
  return (
    <TouchableOpacity
      onPress={() => handleVote(id)}
      style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonVote;
