import { View, TextInput, StyleSheet, Image, ImageSourcePropType } from "react-native";
import Colors from "../../constants/colors";

type Props = {
  image: ImageSourcePropType,
  placeholder: string,
  secure: boolean,
  value: any,
  onChangeText: any,
  onFocus: any,
  error: any,
}


function Input({placeholder, value, secure, onChangeText, onFocus, error, image}: Props, {style}: any) {

  return (
    <View style={[styles.inputContainer, style, error && styles.inputError]}>
      <Image source={image} style={styles.inputImage} />
      <TextInput
        style={styles.inputBox}
        placeholder={placeholder}
        placeholderTextColor={Colors.primary300}
        value={value}
        secureTextEntry={secure}
        onChangeText={onChangeText}
        onFocus={onFocus}
        autoCapitalize="none"
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.primary200,
    flexDirection: 'row',
    alignItems: 'center',
    width: 330,
    height: 55,
    borderRadius: 25,
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    borderColor: Colors.primary200,
    borderWidth: 1,
    color: Colors.primary300,
  },
  inputBox: {
    fontSize: 16,
    color: Colors.primary300,
    //borderColor: Colors.primary200,
    width: '85%',
    height: '100%',
    borderColor: 'blue',
    borderWidth: 1,  
  },
  inputError: {
    borderColor: Colors.warning,
  },
  inputImage:{
    margin: 5,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  }
});
