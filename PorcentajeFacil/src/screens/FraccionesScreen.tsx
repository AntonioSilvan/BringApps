import React, { useState } from "react";
import { Text,View, TextInput, Keyboard, ImageBackground } from 'react-native';
import { styles } from "../theme/AppTheme";
import { ActionsButtonsComponent } from "../components/ActionButtons/ActionButtons.component";

export const FraccionesScreen = () => {

    const [result, setResult] = useState('0.0');
    const [form, setForm] = useState({
        numerador: '',
        denominador: ''
    });

    const onChanges = (value:string, field:string) => {
        setForm({
            ...form,
            [field]: value
        });
    }

    const calcular = () => {
        const numerador = parseInt(form.numerador);
        const denominador = parseInt(form.denominador);

        const resultado = (numerador / denominador)*100;
        setResult(resultado.toString());
        Keyboard.dismiss();
    }

    const limpiar = () => {
        setForm({
            numerador: '',
            denominador: ''
        });
        setResult('0.0');
    }

    return (
        <View>
            <ImageBackground source={require('../assets/img/bg6.png')} resizeMode="repeat" style={{height: '100%'}}>
                <View style={styles.calculationPanel}>
                    <View style={styles.simpleEntries}>
                        <View style={{flex: 2}}>
                            <Text style={styles.labelNumberInput}>Fraccion </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <TextInput style={styles.numberInput} placeholder="0.0" keyboardType="numeric" value={form.numerador} onChangeText={ (value) => onChanges(value, 'numerador')}/>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.labelNumberInput}>   / </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <TextInput style={ styles.numberInput} placeholder="0.0" keyboardType="numeric" value={form.denominador} onChangeText={ (value) => onChanges(value, 'denominador')}/>
                        </View>
                    </View>
                    <ActionsButtonsComponent calcular={calcular} limpiar={limpiar}/>
                </View>
                <View style={{margin: 30}}>
                    <Text style={{textAlign: 'center', fontSize: 20, color: '#37cc70' }}>La fraccion equivale a:</Text>
                    <Text style={{textAlign: 'center', fontSize: 50, color: '#37cc70' }}>% {result}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}