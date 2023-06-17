/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#eceff1',
    marginTop: 10,
    borderRadius: 10,
    // maxWidth: Dimensions.get('window').width / 2,
    margin: 5,
    flex: 1 / 2,
    padding: 10,
  },
  image: {
    borderRadius: 10,
    height: Dimensions.get('window').height / 4,
  },
  product_info: {
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inStock: {
    color: 'red',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
