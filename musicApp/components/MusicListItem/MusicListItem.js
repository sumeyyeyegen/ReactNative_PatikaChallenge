import React from 'react'
import styles from './MusicListItem.styles'
import {View,Text} from 'react-native';
import Avatar from '../Avatar/Avatar';
import Content from '../Content/Content';

const MusicListItem = ({musicItem}) => {
  return ( 
    <View style={styles.listItem}>
      <Avatar imageSource={musicItem.imageUrl} />
      <Content musicItem={musicItem} />
    </View>
  )
}

export default MusicListItem