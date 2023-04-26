import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Title from "../components/UI/Title";
import SignUpForm from "../components/Auth/SignUpForm";
import Colors from "../constants/colors";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList,"SignUp">;

type Props = { navigation: SignUpScreenNavigationProp };

function SignUpScreen({ navigation }: Props) {

  return (
    <View style={styles.safeContainer}>

      <StatusBar style="light" />

      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Title style={styles.title}>Sign Up</Title>
        </View>

        <SignUpForm />

      </View>

      <View style={styles.footerContainer}>
        <View style={styles.line} />
        <View style={styles.footer}>
          <Text style={styles.questionText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.actionText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SignUpScreen;
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    alignItems: "center",
    marginTop: 130,
  },
  title: {
    textAlign: "center",
  },
  titleContainer: {
    marginBottom: 80,
  },
  buttonContainer: {
    marginBottom: 200,
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
