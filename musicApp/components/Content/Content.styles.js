import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 27,
  },
  year: {
    color: 'gray',
    fontSize: 12,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  singer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'capitalize',
  },
  status: {
    borderColor: 'red',
    color: 'red',
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 5,
    textTransform: 'uppercase',
    borderWidth: 1,
  },
  info_container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inner_container: {
    padding: 10,
    flex: 1,
  },
  content_container: {
    flexDirection: 'row',
    // justifyContent:'space-between',
    flex: 1,
    alignItems: 'center',
  },
});
