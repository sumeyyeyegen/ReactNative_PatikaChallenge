import React, {useState} from 'react';
import styles from './AddTodo.styles';
import {Button, Text, TextInput, TouchableHighlight, View} from 'react-native';

const AddTodo = ({addTodo}) => {
  const [todoText, setTodoText] = useState();
  return (
    <View style={styles.card}>
      <TextInput
        style={styles.input}
        onChangeText={setTodoText}
        value={todoText}
        placeholder="Yapılacak..."
        placeholderTextColor="#808080"
      />
      <TouchableHighlight
        onPress={() => {
          addTodo(todoText);
          setTodoText('');
        }}>
        <View style={styles.todoButton}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default AddTodo;
