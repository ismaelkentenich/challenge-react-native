import { View, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
   <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
