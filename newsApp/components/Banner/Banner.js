/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './Banner.style';
import {ScrollView,Image} from 'react-native';

const ScrollNews = ({news_banner_data}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll_view}>
    {
      news_banner_data.map(bannerNews =><Image style={styles.image} source={{uri: bannerNews.imageUrl}} />)
    }
    </ScrollView>
  );
};

export default ScrollNews;