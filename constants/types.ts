import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    SignUp: undefined,
    Login: undefined,
    Home: undefined,
  }
  
  type ScreenNavigationProp = StackNavigationProp<RootStackParamList, {screen}>;
  
  type Props = { navigation: ScreenNavigationProp};
  const navigation = useNavigation<ProfileScreenNavigationProp>(); 

const NavigationScreens = {
    const navigation = useNavigation<ProfileScreenNavigationProp>(); 
    


}