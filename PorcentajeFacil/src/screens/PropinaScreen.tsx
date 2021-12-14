import React, { useState } from "react";
import { Text,View, Keyboard } from 'react-native';
import { styles } from "../theme/AppTheme";
import { ActionsButtonsComponent } from "../components/ActionButtons/ActionButtons.component";
import { CInputNumber } from "../components/CInputNumber.component";

export const PropinaScreen = () => {

    const [result, setResult] = useState('0.0');
    const [totalCuenta, setTotalCuenta] = useState('0.0')
    const [form, setForm] = useState({
        cuenta: '',
        propina: ''
    });

    const onChanges = (value:string, field:string) => {
        setForm({
            ...form,
            [field]: value
        });
    }

    const calcular = () => {
        const precioActual = parseInt(form.cuenta);
        const descuento = parseInt(form.propina);

        const propina = (precioActual * descuento)/100;
        const cuentaTotal = precioActual + propina;
        setResult(propina.toString());
        setTotalCuenta(cuentaTotal.toString());
        Keyboard.dismiss();
    }

    const limpiar = () => {
        setForm({
            cuenta: '',
            propina: ''
        });
        setResult('0.0');
        setTotalCuenta('0.0');
    }

    return (
        <View>
                <View style={styles.calculationPanel}>
                    <View style={styles.simpleEntries}>
                        <View style={{flex: 2, marginRight: 5, marginBottom: 10}}>
                            <Text style={styles.labelNumberInput}>Cuenta $</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <CInputNumber placeHolder="0.0" value={form.cuenta} onChanges={onChanges} name="cuenta"/>
                        </View>
                    </View>
                    <View style={styles.simpleEntries}>
                        <View style={{flex: 2, marginRight: 5}}>
                            <Text style={styles.labelNumberInput}>Propina %</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <CInputNumber placeHolder="0.0" value={form.propina} onChanges={onChanges} name="propina"/>
                        </View>
                    </View>
                    <ActionsButtonsComponent calcular={calcular} limpiar={limpiar}/>
                </View>
                <View style={{margin: 30}}>
                    <Text style={{textAlign: 'center', fontSize: 20, color: '#37cc70' }}>Cantidad de propina:</Text>
                    <Text style={{textAlign: 'center', fontSize: 50, color: '#37cc70' }}>{result}</Text>

                    <Text style={{textAlign: 'center', fontSize: 20, color: '#37cc70', marginTop: 30 }}>Cuenta total:</Text>
                    <Text style={{textAlign: 'center', fontSize: 30, color: '#37cc70' }}>{totalCuenta}</Text>
                </View>
        </View>
    )
}