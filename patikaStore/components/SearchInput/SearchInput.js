/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './SearchInput.style';
import {TextInput} from 'react-native';

const SearchInput = () => {
  return (
    <TextInput
    style={styles.input}
      placeholder='Ara...'
    />
  )
} 

export default SearchInput 