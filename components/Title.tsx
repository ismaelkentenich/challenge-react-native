import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors'

function Title({children}: any) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        color: Colors.primary100,
    }
})