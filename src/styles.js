import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  addButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFF",
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 20,
  },
  completedText: {
    textDecorationLine: "line-through",
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default styles;
