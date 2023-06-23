import React, {useEffect, useState} from 'react';
import styles from './TodoList.styles';
import {FlatList, Text, View} from 'react-native';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({activeCount, todoList, changeAsCompleted, findActive}) => {
  // const [todoList, setTodoList] = useState([
  //   {id: 1, title: 'Test', isActive: true},
  //   {id: 2, title: 'Test', isActive: false},
  //   {id: 3, title: 'Test', isActive: false},
  // ]);

  // const [activeCount, setActiveCount] = useState(0);

  // function findActive() {
  //   let data = todoList.filter(item => (item.isActive ? item : ''));
  //   setActiveCount(data.length);
  // }

  // function changeAsCompleted(id, checked) {
  //   let getIndex = todoList.findIndex(item => item.id === id);
  //   const updatedTasks = [...todoList];
  //   updatedTasks[getIndex].isActive = checked;
  //   setTodoList(updatedTasks);
  // }

  useEffect(() => {
    findActive();
  }, []);

  useEffect(() => {
    findActive();
  }, [todoList, findActive]);

  const title = () => (
    <View style={styles.header_container}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.count}>{activeCount}</Text>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={title}
        data={todoList}
        renderItem={({item}) => (
          <TodoItem todo={item} changeAsCompleted={changeAsCompleted} />
        )}
      />
    </View>
  );
};

export default TodoList;
