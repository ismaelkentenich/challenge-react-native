import { View, StyleSheet, Text } from 'react-native';
import Input from "./Input";
import { useState } from 'react';
import Colors from '../../constants/colors';
import PrimaryButton from '../UI/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Fonts } from '../../constants/fonts';

type RootStackParamList = {Home: undefined;};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList,'Home'>;

function LoginForm(){
    
    const navigation = useNavigation<ProfileScreenNavigationProp>();    

    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [showErrorPassword, setShowErrorPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

        let hasError = false;
        
        if (email.trim() === "") {
            setShowErrorEmail(true);
            hasError = true;
        }
        if (password.trim() === "") {
            setShowErrorPassword(true);
            hasError = true;
        }
        if(!hasError) {
            navigation.navigate('Home');
        }
    }

    return(
        <View style={styles.container}>
            <View>
                <Input
                placeholder="Your email"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setShowErrorEmail(false)}
                error={showErrorEmail}
                secure={false}
                image={require('../../assets/images/icon-mail.png')}
                />
            </View>

            <View style={styles.errorContainer}>
                {showErrorEmail && <Text style={styles.errorMessage}>Please enter a valid email address.</Text>}
            </View>
            
            <View>
                <Input 
                placeholder="Your password"
                value={password}
                secure={true}
                onChangeText={setPassword}
                onFocus={() => setShowErrorPassword(false)}
                error={showErrorPassword}
                image={require('../../assets/images/icon-password.png')}
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
        alignItems: 'center',
    },
    errorMessage:{
        color: Colors.warning,
        fontSize: 12,
        fontFamily: Fonts.InterRegular,
    },
    errorContainer: {
        alignSelf: 'flex-start',
        marginLeft: 40,
    },
})