import { View, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Title from "../components/UI/Title";
import SignUpForm from "../components/Auth/SignUpForm";
import PrimaryButton from "../components/UI/PrimaryButton";

function SignUpScreen(){
    return(
        <View>
            <StatusBar style="light" />
            <View>
                <Title>Sign Up</Title>
            </View>
            <SignUpForm />
            <PrimaryButton>Create Account</PrimaryButton>
        </View>
    );
}

export default SignUpScreen;