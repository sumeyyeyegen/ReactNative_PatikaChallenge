/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  FlatList,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import news_data from './news_data.json';
import banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard/NewsCard';
import Banner from './components/Banner/Banner';

function App() {

  const renderNews = (item) => <NewsCard news={item.item} />;

  const banner = () => <Banner news_banner_data={banner_data} />;

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header_text}>News</Text>
        <FlatList
          ListHeaderComponent={banner}
          data={news_data}
          renderItem={renderNews}
          keyExtractor={item => item.u_id.toString()}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header_text:{
    fontSize:50,
    fontWeight:'bold',
  },
});

export default App;
