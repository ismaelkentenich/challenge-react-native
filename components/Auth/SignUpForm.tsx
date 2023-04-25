import { View, StyleSheet, Text } from 'react-native';
import Input from "./Input";
import Checkbox from '../UI/Checkbox';
import { useState } from 'react';
import Colors from '../../constants/colors';
import PrimaryButton from '../UI/PrimaryButton';

function SignUpForm(){

    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [showErrorUsername, setShowErrorUsername] = useState(false);
    const [showErrorPassword, setShowErrorPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        if (email.trim() === "") {
            setShowErrorEmail(true);
        }
        if (username.trim() === "") {
            setShowErrorUsername(true);
        }
        if (password.trim() === "") {
            setShowErrorPassword(true);
        }
        else {
            // TO DO - GO TO HOME PAGE
            console.log("CADASTRO REALIZADO");
        }
    }
    

    return(
        <View>
            <View>
                <View>
                    <Input 
                    placeholder='Your email'
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
                    placeholder='username'
                    value={username}
                    onChangeText={setUsername}
                    onFocus={() => setShowErrorUsername(false)}
                    />
                </View>
                <View style={styles.errorContainer}>
                    {showErrorUsername && <Text style={styles.errorMessage}>Please enter a valid username.</Text>}
                </View>

                <View>
                    <Input 
                    placeholder='Your password'
                    value={password}
                    secure
                    onChangeText={setPassword}
                    onFocus={() => setShowErrorPassword(false)}
                    />
                </View>
                <View style={styles.errorContainer}>
                    {showErrorPassword && <Text style={styles.errorMessage}>Please enter a valid password.</Text>}
                </View>
            </View>
            
            <Checkbox />

            <PrimaryButton onPress={handleSignUp}> Create Account </PrimaryButton>

        </View>
    );
}

export default SignUpForm;

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
        justifyContent: 'flex-start'
    },
})