import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

type Props = {
  action: any;
  firstText: string;
  secondText: string;
};

function Footer({ action, firstText, secondText }: Props) {

  return (
    <View style={styles.footerContainer}>
      <View style={styles.line} />
      <View style={styles.footer}>
        <Text style={styles.questionText}>{firstText}</Text>
        <TouchableOpacity onPress={action}>
          <Text style={styles.actionText}>{secondText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    padding: 10,
    width: "100%",
    height: 50,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  questionText: {
    color: Colors.whiteish,
    fontFamily: Fonts.InterRegular,
  },
  actionText: {
    marginLeft: 5,
    color: Colors.primary100,
    fontFamily: Fonts.InterSemiBold,
  },
  line: {
    borderBottomWidth: 0.7,
    borderBottomColor: Colors.primary100,
    marginBottom: 20,
  },
});
