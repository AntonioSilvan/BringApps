import React, { useState } from "react";
import { Text,View, TextInput, Keyboard } from 'react-native';
import { styles } from "../theme/AppTheme";
import { ActionsButtonsComponent } from "../components/ActionButtons/ActionButtons.component";

export const IvaScreen = () => {

    const [result, setResult] = useState('0.0');
    const [impuestos, setImpuestos] = useState('0.0');
    const [form, setForm] = useState({
        precioNeto: '',
        iva: ''
    });

    const onChanges = (value:string, field:string) => {
        setForm({
            ...form,
            [field]: value
        });
    }

    const calcular = () => {
        const precioNeto = parseInt(form.precioNeto);
        const iva = parseInt(form.iva);

        const impuestos = (precioNeto * iva)/100;
        const precioBruto = precioNeto + iva;
        setResult(precioBruto.toString());
        setImpuestos(impuestos.toString());
        Keyboard.dismiss();
    }

    const limpiar = () => {
        setForm({
            precioNeto: '',
            iva: ''
        });
        setResult('0.0');
        setImpuestos('0.0');
    }

    return (
        <View>
            <View style={styles.calculationPanel}>
                <View style={styles.simpleEntries}>
                    <View style={{flex: 2, marginRight: 5, marginBottom: 10}}>
                        <Text style={styles.labelNumberInput}>Precio neto $</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <TextInput style={styles.numberInput}  value={form.precioNeto} onChangeText={(value) => onChanges(value, 'precioNeto')} placeholder="0.0" keyboardType="numeric"/>
                    </View>
                </View>
                <View style={styles.simpleEntries}>
                    <View style={{flex: 2, marginRight: 5}}>
                        <Text style={styles.labelNumberInput}>IVA %</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <TextInput style={styles.numberInput} value={form.iva} onChangeText={(value) => onChanges(value, 'iva')} placeholder="0.0" keyboardType="numeric"/>
                    </View>
                </View>
                <ActionsButtonsComponent calcular={calcular} limpiar={limpiar}/>
            </View>
            <View style={{margin: 30}}>
                <Text style={{textAlign: 'center', fontSize: 20, color: '#37cc70' }}>Precio bruto:</Text>
                <Text style={{textAlign: 'center', fontSize: 50, color: '#37cc70' }}>{result}</Text>

                <Text style={{textAlign: 'center', fontSize: 20, color: '#37cc70', marginTop: 30 }}>Impuestos:</Text>
                <Text style={{textAlign: 'center', fontSize: 30, color: '#37cc70' }}>{impuestos}</Text>
            </View>
        </View>
    )
}