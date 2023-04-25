import { View, StyleSheet } from 'react-native';
import Input from "./Input";


function LoginForm(){
    return(
        <View>
            <View style={styles.inputContainer} >
                <Input placeholder="Your email"/>
            </View>
            <View style={styles.inputContainer} >
                <Input placeholder="Your password" />
            </View>
        </View>
    );
}

export default LoginForm;

const styles = StyleSheet.create({
    inputContainer: {
       padding: 5,
       //margin: 5,
    }
})