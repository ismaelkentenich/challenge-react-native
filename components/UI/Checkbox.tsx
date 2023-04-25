import { View, StyleSheet, Text } from 'react-native';
import { CheckBox } from "react-native-elements";
import Colors from "../../constants/colors";
import { useState } from "react";

function Checkbox(){

    const [isSelected, setSelected] = useState(false);

    return(
        <View style={styles.checkBoxContainer}>
          <View>
            <CheckBox
                checkedIcon="check-square"
                uncheckedIcon="square-o"
                checkedColor="#D78F3C"
                uncheckedColor="white"
                checked={isSelected}
                onPress={() => setSelected(!isSelected)}
            />
          </View>  
          <View style={styles.checkBoxTextCont}>
            <Text style={styles.checkBoxText}>Agree To</Text>
            <Text style={[styles.checkBoxText, styles.checkBoxTerms]}>Terms And Conditions</Text>
          </View>
        </View>
    );
}

export default Checkbox;

const styles = StyleSheet.create({
  checkBoxContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'center',
      padding: 3,
    },
    checkBoxTextCont: {
      flexDirection: "row",
    },
    checkBoxText: {
      color: Colors.whiteish,
      padding: 2,
      fontSize: 9,
    },
    checkBoxTerms: {
      fontWeight: "bold",
      textDecorationLine: 'underline',
    },
})