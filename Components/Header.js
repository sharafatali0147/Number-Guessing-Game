import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../Constants/colors';


const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{ props.title}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 45,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
        
    },
});

export default Header;