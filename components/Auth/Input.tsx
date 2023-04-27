import { View, TextInput, StyleSheet, Image } from "react-native";
import Colors from "../../constants/colors";

function Input({ style, placeholder, value, keyboardType, secure, onChangeText, onFocus, error }: any) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
       // style={styles.inputBox}
        style={[styles.inputBox, style, error && styles.inputError]}
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
    borderColor: Colors.primary200,
    borderWidth: 1,
  },
  inputContainer: {
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: Colors.warning,
  },
});
