import React, { useState } from "react";
import { Text,View, Keyboard  } from 'react-native';
import { styles } from "../theme/AppTheme";
import { ActionsButtonsComponent } from "../components/ActionButtons/ActionButtons.component";
import { CInputNumber } from "../components/CInputNumber.component";
import { sanitResult } from "../Helper";

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
        const precioActual = parseFloat(form.precioActual);
        const descuento = parseFloat(form.descuento);

        const descuentoCantidad = (precioActual * descuento)/100;
        const resultado = precioActual - descuentoCantidad;

        const sanitDescuentoCantidad = sanitResult(descuentoCantidad);
        const sanitResultado = sanitResult(resultado);

        setResult(sanitResultado);
        setAhorro(sanitDescuentoCantidad);
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
                            <CInputNumber placeHolder="0.0" value={form.precioActual} onChanges={onChanges} name="precioActual"/>
                        </View>
                    </View>
                    <View style={styles.simpleEntries}>
                        <View style={{flex: 2, marginRight: 5}}>
                            <Text style={styles.labelNumberInput}>Descuento %</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <CInputNumber placeHolder="0.0" value={form.descuento} onChanges={onChanges} name="descuento"/>
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