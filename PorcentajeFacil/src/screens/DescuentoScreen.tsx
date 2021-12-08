import React, { useState } from "react";
import { Text,View, TextInput, Keyboard } from 'react-native';
import { styles } from "../theme/AppTheme";
import { ActionsButtonsComponent } from "../components/ActionButtons/ActionButtons.component";

export const DescuentoScreen = () => {

    const [result, setResult] = useState('0.0');
    const [ahorro, setAhorro] = useState('0.0');
    const [ form, setForm ] = useState({
        precioActual: '',
        descuento: ''
    });

    const onChanges = (value:string, field:string) => {
        setForm({
            ...form,
            [field]: value
        });
    }

    const calcular = () => {
        const precioActual = parseInt(form.precioActual);
        const descuento = parseInt(form.descuento);

        const descuentoCantidad = (precioActual * descuento)/100;
        const resultado = precioActual - descuentoCantidad;
        setResult(resultado.toString());
        setAhorro(descuentoCantidad.toString());
        Keyboard.dismiss();
    }

    const limpiar = () => {
        setForm({
            precioActual: '',
            descuento: ''
        });
        setResult('0.0');
        setAhorro('0.0');
    }

    return (
        <View>
            <View style={styles.calculationPanel}>
                <View style={styles.simpleEntries}>
                    <View style={{flex: 2, marginRight: 5, marginBottom: 10}}>
                        <Text style={styles.labelNumberInput}>Precio actual $</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <TextInput style={styles.numberInput}  value={form.precioActual} onChangeText={(value) => onChanges(value, 'precioActual')} placeholder="0.0" keyboardType="numeric"/>
                    </View>
                </View>
                <View style={styles.simpleEntries}>
                    <View style={{flex: 2, marginRight: 5}}>
                        <Text style={styles.labelNumberInput}>Descuento %</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <TextInput style={styles.numberInput} value={form.descuento} onChangeText={(value) => onChanges(value, 'descuento')} placeholder="0.0" keyboardType="numeric"/>
                    </View>
                </View>
                <ActionsButtonsComponent calcular={calcular} limpiar={limpiar}/>
            </View>
            <View style={{margin: 30}}>
                <Text style={{textAlign: 'center', fontSize: 20, color: '#37cc70' }}>Resultado:</Text>
                <Text style={{textAlign: 'center', fontSize: 50, color: '#37cc70' }}>{result}</Text>

                <Text style={{textAlign: 'center', fontSize: 20, color: '#37cc70', marginTop: 30 }}>Ahorras:</Text>
                <Text style={{textAlign: 'center', fontSize: 30, color: '#37cc70' }}>{ahorro}</Text>
            </View>
        </View>
    )
}