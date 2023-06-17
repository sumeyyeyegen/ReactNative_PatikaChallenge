/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MusicList from './components/MusicList/MusicList';
import SearchBar from './components/SearchBar/SearchBar';
import musicList from './musicData.json';

function App() {
  const [list, setList] = useState('');
  const onSearch = text => {
    const filteredList = musicList?.filter(item => {
      const searchedText = text.toLowerCase();
      const currentTitle = item.title.toLowerCase();
      const currentArtist = item.artist.toLowerCase();
      const currentAlbum = item.album.toLowerCase();

      return (
        currentTitle.indexOf(searchedText) ||
        currentArtist.indexOf(searchedText) > -1 ||
        (currentTitle === searchedText && currentArtist === searchedText)
      );
    });
    setList(filteredList);
  };

  useEffect(() => {
    setList([...musicList]);
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar onSearch={onSearch} />
      <MusicList musicList={list} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
