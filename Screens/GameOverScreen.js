import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import Card from '../Components/Card';

const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <Card style= {styles.card}>
                <Text style={ styles.text}>Game is Over!</Text>
                <Text style={ styles.text1}>Number of rounds: {props.roundsNumber}</Text>
                <Text style={ styles.text1}>Number was: {props.userNumber}</Text>
                <Button style={ styles.btn} title="New Game" onPress={props.newGame }/>
            </Card>
            
        </View>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'green',
        fontSize: 30,
        paddingBottom: 10
    },
    text1: {
        fontSize: 18,
        paddingBottom: 0,

    },
    btn: {
       width: 50 
    },
    card: {
        padding: 20
    }
});

export default GameOverScreen;
