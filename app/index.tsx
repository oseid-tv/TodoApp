import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  Button,
  StatusBar,
} from "react-native";

export default function Index() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<{ id: number; name: string }[]>([]);
  const [itemInEdit, setItemInEdit] = useState(0);
  const [editedText, setEditedText] = useState("");

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
          <View style={styles.itemListed}>
            {itemInEdit === item.id ? (
              <TextInput
                value={editedText}
                onChangeText={setEditedText}
                style={{ ...styles.input, width: "70%" }}
                placeholder="Edit todo"
              />
            ) : (
              <Text style={styles.itemName}>{item.name}</Text>
            )}

            <View style={styles.actions}>
              {itemInEdit === item.id ? (
                <AntDesign
                  name="check"
                  size={24}
                  color="green"
                  onPress={() => {
                    setTodos((prevTodos) =>
                      prevTodos.map((todo) =>
                        todo.id === item.id
                          ? { ...todo, name: editedText }
                          : todo
                      )
                    );
                    setItemInEdit(0);
                    setEditedText("");
                  }}
                />
              ) : (
                <AntDesign
                  name="edit"
                  size={24}
                  color="green"
                  onPress={() => {
                    setItemInEdit(item.id);
                  }}
                />
              )}
              <AntDesign
                style={{ marginLeft: 10 }}
                name="delete"
                size={24}
                color="red"
                onPress={() => {
                  setTodos(todos.filter((todo) => todo.id !== item.id));
                }}
              />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "20%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    width: "80%",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
