/* eslint-disable prettier/prettier */
import React from 'react'
import styles from './ProductCard.style';
import {Image, Text, View} from 'react-native';

const ProductCard = ({product}) => {
  console.log('product',product);
  return (
    <View style={styles.card}>
      <Image resizeMode='contain' source={{uri:product.imgURL}} style={styles.image} />
      <View style={styles.product_info}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View> 
      {product.inStock ? '' : <Text style={styles.inStock}>Stokta yok</Text>}
    </View> 
  );
};

export default ProductCard;