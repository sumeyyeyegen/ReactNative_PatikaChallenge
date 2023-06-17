/* eslint-disable prettier/prettier */
import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#eceff1',
    margin:10,
    borderRadius:10,
  },
  title: {
    fontWeight:800,
    fontSize:18,
    marginBottom:10,
  },
  image: {
    height:Dimensions.get('window').height / 4,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    },
  description: {
  },
  inner_container: {
    padding:10,
  },
  author: {
    fontStyle:'italic',
    textAlign:'right',
  },
});
