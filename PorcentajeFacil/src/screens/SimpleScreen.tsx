import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert } from 'react-native';
import { styles } from "../theme/AppTheme";
import { ActionsButtonsComponent } from '../components/ActionButtons/ActionButtons.component';

export const SimpleScreen = () => {

    const [form, setForm] = useState({
        porcentaje: '',
        cantidad: ''
    });

    const onChanges = ( value: string, field: string) => {
        setForm({
            ...form,
            [field]: value
        });
    }

    const calcular = () => {
        const porcentaje = parseInt(form.porcentaje);
        const cantidad = parseInt(form.cantidad);

        const result = (cantidad * porcentaje)/100;
        Alert.alert(result.toString()); 
    }

    return (
        <View>
            <View style={styles.calculationPanel}>
                <View style={styles.simpleEntries}>
                    <View style={{flex: 2}}>
                        <TextInput style={styles.numberInput} placeholder="0.0" keyboardType="numeric" onChangeText={ (value) => onChanges(value, 'porcentaje')}/>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.labelNumberInput}>% De </Text>
                    </View>
                    <View style={{flex: 2}}>
                        <TextInput style={ styles.numberInput} placeholder="0.0" keyboardType="numeric" onChangeText={ (value) => onChanges(value, 'cantidad')}/>
                    </View>
                </View>
                <ActionsButtonsComponent accion={calcular}/>
            </View>
            <View style={{margin: 30}}>
                <Text style={{textAlign: 'center', fontSize: 20, color: '#37cc70' }}>Resultado:</Text>
                <Text style={{textAlign: 'center', fontSize: 50, color: '#37cc70' }}>0.0</Text>
            </View>
        </View>
    )
}