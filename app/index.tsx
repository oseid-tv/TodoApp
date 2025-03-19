import { Text, View, StyleSheet, FlatList } from "react-native";

const mockData = [
  { id: 1, name: "Buy groceries" },
  { id: 2, name: "Finish React Native course" },
  { id: 3, name: "Read a book" },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>
      <FlatList
        data={mockData}
        renderItem={({ item }) => (
          <Text style={styles.itemListed}>{item.name}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
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
});
