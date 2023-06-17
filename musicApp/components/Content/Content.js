import React from 'react';
import styles from './Content.styles';
import {Text, View} from 'react-native';

const Content = ({musicItem}) => {
  return (
    <View style={styles.inner_container}>
      <Text style={styles.title}>{musicItem.title}</Text>
      <View style={styles.content_container}>
        <View style={styles.info_container}>
          <Text style={styles.singer}>{musicItem.artist}</Text>
          <Text style={styles.year}>{musicItem.year}</Text>
        </View>
        {musicItem.isSoldOut && (
          <View style={styles.soldout_container}>
            <Text style={styles.status}>Tükendi</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Content;
