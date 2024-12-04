import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.AppContainer}
    >
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} placeholder="Your To Do!" />
        <Button title="Add ToDo" />
      </View>
      <Text>List To Do ... </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
})
