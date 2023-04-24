import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../constants/colors";

function PrimaryButton({ children }: any) {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary100,
    width: 375,
    height: 55,
    borderRadius: 25,
    padding: 20,
  },
  buttonText: {
    color: "#DBDBDB",
    textAlign: "center",
  },
});
