/* eslint-disable prettier/prettier */
import React from 'react'
import styles from './MusicList.styles'
import {View,FlatList} from 'react-native';
import MusicListItem from '../MusicListItem/MusicListItem';

const MusicList = ({musicList}) => {
  const renderSong = ({item}) => <MusicListItem musicItem={item} />;
  const renderSeperator = () => <View style={styles.seperator}/>
  return (
    <FlatList data={musicList} renderItem={renderSong} ItemSeparatorComponent={renderSeperator} keyExtractor={item => item.id}/>
  )
}

export default MusicList;