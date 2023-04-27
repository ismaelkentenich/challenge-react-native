import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from 'react';
import Colors from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

function PrimaryButton({ children, onPress}: any) {
  const [pressed, setPressed] = useState(false);

  const handlePressIn = () => setPressed(true);
  const handlePressOut = () => setPressed(false);

  return (
    <Pressable 
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      >
      <View style={[styles.button, pressed && styles.pressed]}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary100,
    width: 330,
    height: 55,
    borderRadius: 25,
    padding: 17,
    marginTop: 15,
  },
  buttonText: {
    color: "#DBDBDB",
    textAlign: "center",
    justifyContent: 'center',
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: Fonts.InterRegular,
  },
  pressed: {
    opacity: 0.7,  
  }
});
