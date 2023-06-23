/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
function App() {
  const [todoList, setTodoList] = useState([
    {id: 1, title: 'Test1', isActive: true},
    {id: 2, title: 'Test2', isActive: false},
    {id: 3, title: 'Test3', isActive: false},
  ]);

  const [activeCount, setActiveCount] = useState(0);

  function findActive() {
    let data = todoList.filter(item => (item.isActive ? item : ''));
    // console.log('data', data);
    setActiveCount(data.length);
  }

  function changeAsCompleted(id, checked) {
    let getIndex = todoList.findIndex(item => item.id === id);
    const updatedTasks = [...todoList];
    updatedTasks[getIndex].isActive = checked;
    setTodoList([...updatedTasks]);
  }

  function addTodo(text) {
    let bashData = todoList;
    setTodoList([
      ...bashData,
      {id: todoList.length + 1, title: text, isActive: true},
    ]);
  }

  return (
    <View style={styles.container}>
      <TodoList
        activeCount={activeCount}
        changeAsCompleted={changeAsCompleted}
        todoList={todoList}
        findActive={findActive}
      />
      <AddTodo addTodo={addTodo} />
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#102027',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
