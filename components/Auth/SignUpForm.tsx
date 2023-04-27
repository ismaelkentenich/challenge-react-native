import { View, StyleSheet } from 'react-native';
import Input from "./Input";
import Checkbox from '../UI/Checkbox';

function SignUpForm(){
    return(
        <View>
            <View>
                <View>
                    <Input placeholder='Your email'/>
                </View>
                <View>
                    <Input placeholder='username'/>
                </View>
                <View>
                    <Input placeholder='Your password'/>
                </View>
            </View>
            <Checkbox />
        </View>
    );
}

export default SignUpForm;
