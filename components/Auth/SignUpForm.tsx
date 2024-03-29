import { View, StyleSheet, Text } from 'react-native';
import Input from "./Input";
import { CheckBox } from "react-native-elements";
import { useState } from 'react';
import Colors from '../../constants/colors';
import PrimaryButton from '../UI/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Fonts } from '../../constants/fonts';

type RootStackParamList = {Home: undefined;};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList,'Home'>;

function SignUpForm(){

    const navigation = useNavigation<ProfileScreenNavigationProp>(); 

    const [checked, setChecked] = useState(false);
    const [showErrorCheckbox, setShowErrorCheckbox] = useState(false);

    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [showErrorUsername, setShowErrorUsername] = useState(false);
    const [showErrorPassword, setShowErrorPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleCheck = () => {
        setChecked(!checked);
        setShowErrorCheckbox(false); 
    }

    const handleSignUp = () => {
        let hasError = false;

        if (email.trim() === "") {
            setShowErrorEmail(true);
            hasError = true;
        }
        if (username.trim() === "") {
            setShowErrorUsername(true);
            hasError = true;
        }
        if (password.trim() === "") {
            setShowErrorPassword(true);
            hasError = true;
        }
        if (!checked) {
            setShowErrorCheckbox(true);
            hasError = true;
        }
        if (!hasError) {
            navigation.navigate('Home');
        }
    }
    

    return(
        <View>
            <View>
                <View>
                    <Input 
                        placeholder='Your email'
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
                    placeholder='username'
                    value={username}
                    onChangeText={setUsername}
                    onFocus={() => setShowErrorUsername(false)}
                    error={showErrorUsername}
                    secure={false}
                    image={require('../../assets/images/icon-user.png')}
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
                    error={showErrorPassword}
                    image={require('../../assets/images/icon-password.png')}
                    /> 
                </View>
                <View style={styles.errorContainer}>
                    {showErrorPassword && <Text style={styles.errorMessage}>Please enter a valid password.</Text>}
                </View>
            </View>

            <View style={styles.checkBoxContainer}>
                <View style={styles.checkBox}>
                    <View>
                        <CheckBox
                            checked={checked}
                            onPress={handleCheck}
                            size={20}
                            checkedIcon="check-square"
                            uncheckedIcon="square-o"
                            checkedColor="#D78F3C"
                            uncheckedColor={showErrorCheckbox ? Colors.warning : Colors.whiteish}
                        />
                    </View> 
                    <View style={styles.checkBoxTextCont}>
                        <Text style={styles.checkBoxText}>Agree To</Text>
                        <Text style={[styles.checkBoxText, styles.checkBoxTerms]}>Terms And Conditions</Text>
                    </View>
                </View>    
                <View>
                    {showErrorCheckbox && <Text style={styles.errorMessage}>Please accept the terms.</Text>}
                </View>
            </View>

            <PrimaryButton onPress={handleSignUp} style={styles.button}> Create Account </PrimaryButton>

        </View>
    );
}

export default SignUpForm;

const styles = StyleSheet.create({
    errorMessage:{
        color: Colors.warning,
        fontSize: 12,
        fontFamily: Fonts.InterRegular,
    },
    errorContainer: {
        alignSelf: 'flex-start',
        marginLeft: 40,
    },

    checkBoxContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    checkBox: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: 'center',
      },
      checkBoxTextCont: {
        flexDirection: "row",
      },
      checkBoxText: {
        color: Colors.whiteish,
        padding: 2,
        fontSize: 12,
        fontFamily: Fonts.InterRegular,
      },
      checkBoxTerms: {
        fontFamily: Fonts.InterSemiBold,
        textDecorationLine: 'underline',
      },
      button:{
        marginTop: 10,
      }
})