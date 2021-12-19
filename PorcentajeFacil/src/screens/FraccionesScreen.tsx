import React, { useState } from "react";
import { Text,View, Keyboard } from 'react-native';
import { styles } from "../theme/AppTheme";
import { ActionsButtonsComponent } from "../components/ActionButtons/ActionButtons.component";
import { CInputNumber } from "../components/CInputNumber.component";
import { sanitResult } from "../Helper";

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
        const numerador = parseFloat(form.numerador);
        const denominador = parseFloat(form.denominador);

        const resultado = (numerador / denominador)*100;

        const sanitResultado = sanitResult(resultado);
        setResult(sanitResultado);
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
                <View style={styles.calculationPanel}>
                    <View style={styles.simpleEntries}>
                        <View style={{flex: 2}}>
                            <Text style={styles.labelNumberInput}>Fraccion </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <CInputNumber placeHolder="0.0" value={form.numerador} onChanges={onChanges} name="numerador"/>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.labelNumberInput}>   / </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <CInputNumber placeHolder="0.0" value={form.denominador} onChanges={onChanges} name="denominador"/>
                        </View>
                    </View>
                    <ActionsButtonsComponent calcular={calcular} limpiar={limpiar}/>
                </View>
                <View style={{margin: 30}}>
                    <Text style={{textAlign: 'center', fontSize: 20, color: '#37cc70' }}>La fraccion equivale a:</Text>
                    <Text style={{textAlign: 'center', fontSize: 50, color: '#37cc70' }}>% {result}</Text>
                </View>
        </View>
    )
}