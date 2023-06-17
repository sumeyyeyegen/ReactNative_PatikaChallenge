import React from 'react'
import {Image} from 'react-native'
import styles from './Avatar.styles';

const Avatar = ({imageSource}) => {
  return (
    <Image source={{uri:imageSource}}  style={styles.avatar}/>
  )
}

export default Avatar