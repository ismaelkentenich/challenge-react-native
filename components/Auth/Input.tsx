import { View, TextInput, StyleSheet, Image } from "react-native";
import Colors from "../../constants/colors";

function Input({ placeholder, value, keyboardType, secure, isValid }: any) {
  return (
    <View style={[styles.inputContainer, isValid && styles.inputInvalid]}>
      <TextInput
        style={styles.inputBox}
        autoCapitalize="none"
        placeholder={placeholder}
        placeholderTextColor="#A8A8A8"
        value={value}
        secureTextEntry={secure}
        keyboardType={keyboardType}
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
  inputInvalid: {
    borderColor: Colors.warning,
  }
});
