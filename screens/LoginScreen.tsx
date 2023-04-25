import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import PrimaryButton from "../components/UI/PrimaryButton";
import { StatusBar } from "expo-status-bar";
import Colors from "../constants/colors";
import Title from "../components/UI/Title";
import LoginForm from "../components/Auth/LoginForm";

import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SignUp: undefined,
  Login: undefined,
}

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

type Props = { navigation: LoginScreenNavigationProp};

function LoginScreen({navigation}: Props) {
  
  return (
    <View style={styles.safeContainer}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Title style={styles.title}>Welcome</Title>
        </View>
          <LoginForm />
        <View>
          <PrimaryButton>LOGIN</PrimaryButton>
        </View> 
      </View>
      
      <View style={styles.footerContainer}>
        <View style={styles.line} />
        <View style={styles.footer}>
          <Text style={styles.questionText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.actionText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
   alignItems: "center",
    marginTop: 170,
  },
  title: {
    textAlign: "center",
  },
  titleContainer: {
    marginBottom: 80,
  },
  footerContainer: {
    padding: 10,
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: 30,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  questionText: {
    color: Colors.whiteish,
  },
  actionText: {
    marginLeft: 5,
    color: Colors.primary100,
    fontWeight: "bold",
  },
  line: {
    borderBottomWidth: 0.7,
    borderBottomColor: Colors.primary100,
    marginBottom: 20,
  },
});
