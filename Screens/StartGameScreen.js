import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../Components/Card';
import Input from '../Components/Input'
import NumberContainer from '../Components/NumberContainer'
import colors from '../Constants/colors'


const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumer, setSelectedNumber] = useState();

// =================== Input Data Validation ============================== 
    const confirmInputHandler = () => {
        const chosenNumer = parseInt(enteredValue);
        
        if (isNaN(chosenNumer) || chosenNumer <= 0 || chosenNumer > 99) {

            Alert.alert('Invelid Number!', 'Nubmer has to be a Number between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return
        }
        
        setConfirmed(true);
        setSelectedNumber(chosenNumer);
        setEnteredValue('');
        Keyboard.dismiss();
    };
// ==========================================================================
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }
// ==========================================================================
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    };

    
    let confirmedOutPut;

    if (confirmed) {
        confirmedOutPut = (
            <Card style={styles.summaryContainer} >
                <Text>You Selected</Text>
                <NumberContainer children={selectedNumer} />
                {/* selectedNumer passing to Main App */}
                <Button title="start game" onPress={() =>  props.onStartGame(selectedNumer)} /> 
            </Card>
        );
    }
    
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

    
            <View style={styles.screen} >

                <Text style={styles.title}>Start a New Game!</Text>

                <Card style={styles.inputContainer}>

                    <Text>Select a Number</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmint
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value = {enteredValue}
                    />

                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Reset"
                                onPress={resetInputHandler}
                                color={colors.accent}
                            />
                        </View>
                        <View style={styles.button} >
                            <Button
                                title="Confirm"
                                onPress={confirmInputHandler}
                                color={colors.primary}
                            />
                        </View>
                    </View>
                </Card>

                {confirmedOutPut}
            </View>
        </TouchableWithoutFeedback>    
    );
};

const styles = StyleSheet.create({
    screen: {

        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 350,
        maxWidth: '80%',
        padding: 15,
        alignItems: 'center',
        
        
    },
    buttonContainer: {
        paddingTop: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        // paddingHorizontal: 15,
    },
    button: {
        width: 80,
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        padding: 15, 
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default StartGameScreen;