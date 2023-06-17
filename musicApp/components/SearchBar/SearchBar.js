import React, {useState} from 'react';
import styles from './SearchBar.styles';
import {TextInput, View} from 'react-native';

const SearchBar = ({onSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..." onChangeText={onSearch} />
    </View>
  );
};

export default SearchBar;
