import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors'
import React, { useEffect } from 'react';
import { loadFonts, Fonts } from '../../constants/fonts';

function Title({children}: any) {

    useEffect(() => { loadFonts(); }, []);

    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        color: Colors.primary100,
        fontSize: 36,
        textTransform: 'uppercase',
        // fontWeight: '700',
        fontFamily: Fonts.KhulaExtraBold,
    }
})