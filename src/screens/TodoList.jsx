import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import TodoItem from "../components/TodoItem";
import { addTodo } from "../redux/actions";
import styles from "../styles";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add todo"
        value={todoText}
        onChangeText={setTodoText}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem todo={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TodoList;
