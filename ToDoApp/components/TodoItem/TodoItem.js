import React from 'react';
import styles from './TodoItem.styles';
import {Text, TouchableOpacity, View} from 'react-native';

const TodoItem = ({todo, changeAsCompleted}) => {
  return (
    <TouchableOpacity
      onPress={() => changeAsCompleted(todo.id, !todo.isActive)}>
      {todo.isActive ? (
        <View style={styles.active}>
          <Text style={styles.todoActive_text}>{todo.title}</Text>
        </View>
      ) : (
        <View
          style={styles.not_active}
          onPress={() => changeAsCompleted(todo.id, !todo.isActive)}>
          <Text style={styles.todoNotActive_text}>{todo.title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default TodoItem;
