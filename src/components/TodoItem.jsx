import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importa el ícono deseado desde react-native-vector-icons
import { useDispatch } from "react-redux";

import { deleteTodo, toggleTodo } from "../redux/actions";
import styles from "../styles";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={handleToggle}>
        <Text style={[styles.todoText, todo.completed && styles.completedText]}>
          {todo.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Icon name="trash" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
