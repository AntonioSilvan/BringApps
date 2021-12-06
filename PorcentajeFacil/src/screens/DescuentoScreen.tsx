import React from "react";
import { Text,View, TextInput } from 'react-native';
import { styles } from "../theme/AppTheme";
import { ActionsButtonsComponent } from "../components/ActionButtons/ActionButtons.component";

export const DescuentoScreen = () => {

    const calcular = () => {

    }

    const limpiar = () => {

    }

    return (
        <View>
            <View style={styles.calculationPanel}>
                <View style={styles.simpleEntries}>
                    <View style={{flex: 2, marginRight: 5, marginBottom: 10}}>
                        <Text style={styles.labelNumberInput}>Precio actual $</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <TextInput style={styles.numberInput} placeholder="0.0" keyboardType="numeric"/>
                    </View>
                </View>
                <View style={styles.simpleEntries}>
                    <View style={{flex: 2, marginRight: 5}}>
                        <Text style={styles.labelNumberInput}>Descuento %</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <TextInput style={styles.numberInput} placeholder="0.0" keyboardType="numeric"/>
                    </View>
                </View>
                <ActionsButtonsComponent calcular={calcular} limpiar={limpiar}/>
            </View>
            <View style={{margin: 30}}>
                <Text style={{textAlign: 'center', fontSize: 20, color: '#37cc70' }}>Resultado:</Text>
                <Text style={{textAlign: 'center', fontSize: 50, color: '#37cc70' }}>0.0</Text>
            </View>
        </View>
    )
}