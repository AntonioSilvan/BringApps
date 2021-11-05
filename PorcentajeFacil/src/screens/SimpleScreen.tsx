import React from "react";
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from "../theme/AppTheme";

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
            <View style={styles.panelActions}>
                <Text style={{ fontSize: 15, color: 'white', borderColor: 'white', borderWidth: 2, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, padding: 10}}>CALCULAR</Text>
                <Text style={{ fontSize: 15, color: 'white', borderColor: 'white', borderWidth: 2, borderTopRightRadius: 10, borderBottomRightRadius: 10, padding: 10}}>LIMPIAR</Text>
            </View>

            {/*
            <TextInput style={{ backgroundColor: 'white'}}/>*/}
            
        </View>
    )
}