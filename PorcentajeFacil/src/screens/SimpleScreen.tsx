import React from "react";
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from "../theme/AppTheme";

export const SimpleScreen = () => {
    return (
        <View style={styles.calculationPanel}>
            <View style={styles.simpleEntries}>
                <View>
                    <TextInput style={{ backgroundColor: 'white'}}/>
                </View>
                <View style={{  backgroundColor:'blue'}}>
                    <Text>Caja2</Text>
                </View>
                <View>
                    <TextInput style={{ borderBottomColor: 'red', borderBottomWidth: 1}} placeholder="0.0" underlineColorAndroid="transparent"/>
                </View>
            </View>
            <View style={styles.panelActions}>
                <Button title="Calcular"/>
            </View>

            {/*
            <TextInput style={{ backgroundColor: 'white'}}/>*/}
            
        </View>
    )
}