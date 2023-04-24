import { View, StyleSheet, Text, SafeAreaView} from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import { StatusBar } from "expo-status-bar";
import Colors from "../constants/colors"
import Title from "../components/Title";

function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark'/>
        <Title>WELCOME</Title>
        <PrimaryButton>LOGIN</PrimaryButton>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
});
