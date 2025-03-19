import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";

const mockData = [
  { id: 1, name: "Buy groceries" },
  { id: 2, name: "Finish React Native course" },
  { id: 3, name: "Read a book" },
];

export default function Index() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(mockData);

  const addTodo = () => {
    setTodos([...todos, { id: todos.length + 1, name: text }]);
    setText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <Button title="Add" onPress={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Text style={styles.itemListed}>{item.name}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  itemListed: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    width: "100%",
  },
});
