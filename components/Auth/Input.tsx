import { View, TextInput, StyleSheet, Image } from "react-native";
import Colors from "../../constants/colors";

function Input({ placeholder, value, keyboardType, secure, onChangeText, onFocus, error }: any) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputBox}
        autoCapitalize="none"
        placeholder={placeholder}
        placeholderTextColor="#A8A8A8"
        value={value}
        secureTextEntry={secure}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        onFocus={onFocus}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: Colors.primary200,
    width: 330,
    height: 55,
    borderRadius: 25,
    padding: 15,
    fontSize: 16,
  },
  inputContainer: {
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
  },
});
