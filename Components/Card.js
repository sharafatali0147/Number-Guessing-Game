import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{ props.children }</View>
 };

const styles = StyleSheet.create({
    card: {
        
        // for IOS 
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 0.26,
        shadowOpacity: 6,
        // shadow for Android 
        elevation: 10, 

        backgroundColor: 'white',

        borderRadius: 15,
    },
});

export default Card;