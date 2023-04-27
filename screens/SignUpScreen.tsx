import { View, StyleSheet, Text, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Title from "../components/UI/Title";
import SignUpForm from "../components/Auth/SignUpForm";
import Colors from "../constants/colors";
import { StackNavigationProp } from "@react-navigation/stack";
import Footer from "../components/UI/Footer";

type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList,"SignUp">;

type Props = { navigation: SignUpScreenNavigationProp };

function SignUpScreen({navigation}: Props) {

  return (

    <View style={styles.safeContainer}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image source={require('../assets/images/arrow.png')} style={styles.arrowButton}/>
        </TouchableOpacity>
      </View>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Title style={styles.title}>Sign Up</Title>
            </View>

            <SignUpForm />

        </View>

        <View style={styles.footerContainer}>
            <Footer 
                action={() => navigation.navigate('Login')}
                firstText="Already have an account?"
                secondText="Sign in"
            />
        </View>
        </ScrollView>
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
    marginTop: 65,
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
  footerContainer:{
    height: 50,
    marginBottom: 40,
    marginTop: 95,
    bottom: 0,
    width: '100%',
  },
  footer:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backContainer:{
    marginTop: 50,
    marginLeft: 25,
  },
  arrowButton: {
    padding: 5,
    width: 30,
    resizeMode: 'contain',
  }
});
