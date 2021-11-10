import React from "react";
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from "../theme/AppTheme";
import { ActionsButtonsComponent } from '../components/ActionButtons/ActionButtons.component';

export const SimpleScreen = () => {
    return (
        <View style={styles.calculationPanel}>
            <View style={styles.simpleEntries}>
                <View style={{flex: 2}}>
                    <TextInput style={styles.numberInput} placeholder="0.0" keyboardType="numeric"/>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.labelNumberInput}>% De </Text>
                </View>
                <View style={{flex: 2}}>
                    <TextInput style={ styles.numberInput} placeholder="0.0" keyboardType="numeric"/>
                </View>
            </View>
            <ActionsButtonsComponent/>

            {/*
            <TextInput style={{ backgroundColor: 'white'}}/>*/}
            
        </View>
    )
}