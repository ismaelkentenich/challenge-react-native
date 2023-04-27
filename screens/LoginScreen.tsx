import { View, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native";

import { StatusBar } from "expo-status-bar";
import Colors from "../constants/colors";
import Title from "../components/UI/Title";
import LoginForm from "../components/Auth/LoginForm";

import { StackNavigationProp } from '@react-navigation/stack';
import Footer from "../components/UI/Footer";

type RootStackParamList = {
  SignUp: undefined,
  Login: undefined,
}

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

type Props = { navigation: LoginScreenNavigationProp};

function LoginScreen({navigation}: Props) {
  
  return (
    <View style={styles.safeContainer}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StatusBar style="light" />
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Title style={styles.title}>Welcome</Title>
          </View>
          <View style={styles.formContainer}>
            <LoginForm />
          </View>
        </View>
      
        <View style={styles.footerContainer}>
          <View style={styles.footer}>
            <Footer 
              action={() => navigation.navigate('SignUp')}
              firstText="Don't have an account?"
              secondText="Sign up"
            />
          </View>
        </View>
        </ScrollView>
    </View>

  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    alignContent: 'center',
  },
  container: {
   alignItems: "center",
   alignContent: 'center',
   justifyContent: 'center',
   marginTop: 170,
  },
  title: {
    textAlign: "center",
  },
  titleContainer: {
    marginBottom: 80,
  },
  formContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },

  footerContainer:{
    marginTop: 200,
    height: 50,
    marginBottom: 40,
    bottom: 0,
    width: '100%',
  },
  footer:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
