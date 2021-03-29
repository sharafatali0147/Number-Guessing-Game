import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import NumberContainer from '../Components/NumberContainer';
import Card from '../Components/Card';

const genrateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return genrateRandomBetween = (min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        genrateRandomBetween(1, 100, props.userChoise)
    );

    const { userChoise, onGameOver } = props;

    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === props.userChoise) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoise, onGameOver]);
    
    // ================== Hooks End =====================

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoise) ||
            (direction === 'greater' && currentGuess > props.userChoise)) {
            
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                {text: 'Sorry', style: 'destructive'}
            ]);

            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }

        const nextNumber = genrateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    };

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer >{currentGuess}</NumberContainer>
            
            <Card style={styles.buttonContainer} >
                <Button title="lower" onPress={nextGuessHandler.bind(this, 'lower')}/>
                <Button title="greater" onPress={nextGuessHandler.bind(this, 'greater')} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',

    },
});

export default GameScreen;