import { View, StyleSheet } from 'react-native';
import Input from "./Input";


function LoginForm(){
    return(
        <View>
            <View>
                <Input placeholder="Your email"/>
            </View>
            <View>
                <Input placeholder="Your password" />
            </View>
        </View>
    );
}

export default LoginForm;
