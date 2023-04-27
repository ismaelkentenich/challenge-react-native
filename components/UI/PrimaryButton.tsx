import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState, useEffect } from 'react';
import Colors from "../../constants/colors";
import { Fonts } from "../../constants/fonts";
import Icon from 'react-native-vector-icons/FontAwesome';

function PrimaryButton({ children, onPress }: any) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={[styles.button, pressed && styles.pressed]}>
        {!pressed ?
          <Text style={styles.buttonText}>{children}</Text> :
          <Icon name="spinner" size={16} color={Colors.whiteish} style={styles.icon} />
        }
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
    color: Colors.whiteish,
    textAlign: "center",
    justifyContent: 'center',
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: Fonts.InterRegular,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    alignSelf: 'center',
    marginRight: 10,
  },
});
