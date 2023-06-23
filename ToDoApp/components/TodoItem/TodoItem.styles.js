import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  active: {
    borderRadius: 10,
    backgroundColor: '#7da453',
    padding: 15,
    margin: 10,
  },
  not_active: {
    borderRadius: 10,
    backgroundColor: '#37474f',
    padding: 15,
    margin: 10,
  },
  todoActive_text: {
    color: 'white',
  },
  todoNotActive_text: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },
});
