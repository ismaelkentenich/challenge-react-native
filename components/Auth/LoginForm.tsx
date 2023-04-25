import { View, StyleSheet, Text } from 'react-native';
import Input from "./Input";
import { useState } from 'react';
import Colors from '../../constants/colors';
import PrimaryButton from '../UI/PrimaryButton';


function LoginForm(){

    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [showErrorPassword, setShowErrorPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email.trim() === "") {
            setShowErrorEmail(true);
        }
        if (password.trim() === "") {
            setShowErrorPassword(true);
        }else {
            // TO DO - GO TO HOME PAGE
            console.log("LOGIN REALIZADO");
        }
    }

    return(
        <View style={styles.container}>
            <View>
                <Input 
                placeholder="Your email"
                value={email}
                keyboardType='email-address'
                onChangeText={setEmail}
                onFocus={() => setShowErrorEmail(false)}
                />
            </View>

            <View style={styles.errorContainer}>
                {showErrorEmail && <Text style={styles.errorMessage}>Please enter a valid email address.</Text>}
            </View>
            
            <View>
                <Input 
                placeholder="Your password"
                value={password}
                secure
                onChangeText={setPassword}
                onFocus={() => setShowErrorPassword(false)}
                />
            </View>
            
            <View style={styles.errorContainer}>
                {showErrorPassword && <Text style={styles.errorMessage}>Please enter a valid password.</Text>}
            </View>

            <View>
                <PrimaryButton onPress={handleLogin}> Login </PrimaryButton>
            </View>
        </View>
    );
}

export default LoginForm;

const styles = StyleSheet.create({
    container:{
        //justifyContent:'center',
        //alignContent:'center',
        alignItems: 'center',
    },
    errorMessage:{
        color: Colors.warning,
        fontSize: 12,
    },
    errorContainer: {
        alignSelf: 'flex-start',
        marginLeft: 40,
    },
})