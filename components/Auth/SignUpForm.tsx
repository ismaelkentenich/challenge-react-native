import { View, StyleSheet } from 'react-native';
import Input from "./Input";

function SignUpForm(){
    return(
        <View /*style={styles.container}*/>
            <Input placeholder='Your email'/>
            <Input placeholder='username'/>
            <Input placeholder='Your password'/>
        </View>
    );
}

export default SignUpForm;
/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})*/