/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import SearchInput from './components/SearchInput';
import products from './products.json';
import ProductCard from './components/ProductCard';

function App() {
  const searchArea = () => <SearchInput />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <FlatList
        ListHeaderComponent={searchArea}
        data={products}
        numColumns={2}
        renderItem={product => <ProductCard product={product.item} />}
        keyExtractor={product => product.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 4,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#800080',
    margin: 10,
  },
});

export default App;
