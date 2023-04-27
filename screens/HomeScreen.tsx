import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { StatusBar } from "expo-status-bar";
import Colors from "../constants/colors";
import { Fonts } from '../constants/fonts';
import { ScrollView } from 'react-native-gesture-handler';

function HomeScreen(){
    const { width, height } = useWindowDimensions();
    const cardWidth = (width - 60) / 2; 
    const cardHeight = (cardWidth * 226) / 186;

    return(
        <View style={styles.safeContainer}>
            <StatusBar style="light" />
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Text style={styles.title}>Home</Text>
                    <View style={styles.cardContainer}>
                        <View style={[styles.card, { width: cardWidth, height: cardHeight }]} ></View>
                        <View style={[styles.card, { width: cardWidth, height: cardHeight }]} ></View>
                    </View>
                    <View style={styles.cardContainer}>
                        <View style={[styles.card, { width: cardWidth, height: cardHeight }]} ></View>
                        <View style={[styles.card, { width: cardWidth, height: cardHeight }]} ></View>
                    </View>
                    <View style={styles.cardContainer}>
                        <View style={[styles.card, { width: cardWidth, height: cardHeight }]} ></View>
                        <View style={[styles.card, { width: cardWidth, height: cardHeight }]} ></View>
                    </View>
                    <View style={styles.cardContainer}>
                        <View style={[styles.card, { width: cardWidth, height: cardHeight }]} ></View>
                        <View style={[styles.card, { width: cardWidth, height: cardHeight }]} ></View>
                    </View>

                </ScrollView>
                
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    container: {
        //marginTop: 40,
        //marginLeft: 30,
    },
    title:{
        marginTop: 50,
        marginLeft: 25,
        color: Colors.primary100,
        fontSize: 20,
        textTransform: 'uppercase',
        fontFamily: Fonts.InterRegular,
    },
    card: {
        backgroundColor: Colors.whiteish,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,
        marginLeft: 7,
        marginRight: 7,
    },
    cardContainer:{
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center'
    }
});
