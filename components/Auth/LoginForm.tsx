import { View, StyleSheet } from 'react-native';
import Input from "./Input";
import { useState } from 'react';

function AuthForm({ isLogin, onSubmit, credentialsInvalid } : any){
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const {
        email: emailIsInvalid,
        password: passwordIsInvalid,
    } = credentialsInvalid;

    function updateInvalidValueHandler({inputType, enteredValue}: any) {
        switch(inputType){
            case 'email':
                setEnteredEmail(enteredValue);
                break;
            case 'password':
                setEnteredPassword(enteredPassword);
                break;    
        }
    }

    function submitHandler(){
        onSubmit({
            email: enteredEmail,
            password: enteredPassword
        });
    }
}

function LoginForm(){

    return(
        <View>
            <View>
                <Input 
                placeholder="Your email"
                value='enteredEmail'
                keyboardType='email-address'
                secure
                />
            </View>
            <View>
                <Input placeholder="Your password"/>
            </View>
        </View>
    );
}

export default LoginForm;
