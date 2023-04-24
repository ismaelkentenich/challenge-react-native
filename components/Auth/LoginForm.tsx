import { View, StyleSheet } from 'react-native';
import Input from "./Input";


function LoginForm(){
    return(
        <View>
            <Input placeholder="Your email" />
            <Input placeholder="Your password" />
        </View>
    );
}

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})