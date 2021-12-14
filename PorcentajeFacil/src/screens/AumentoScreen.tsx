import React, { useState } from "react";
import { Text,View, Keyboard } from 'react-native';
import { styles } from "../theme/AppTheme";
import { ActionsButtonsComponent } from "../components/ActionButtons/ActionButtons.component";
import { CInputNumber } from "../components/CInputNumber.component";

export const AumentoScreen = () => {

    const [result, setResult] = useState('0.0');
    const [ganancia, setGanancia] = useState('0.0');
    const [form, setForm] = useState({
        costo: '',
        aumento: ''
    });

    const onChanges = (value:string, field:string) => {
        setForm({
            ...form,
            [field]: value
        });
    }

    const calcular = () => {
        const costo = parseInt(form.costo);
        const aumento = parseInt(form.aumento);

        const ganancia = (costo * aumento)/100;
        const venta = costo + ganancia;
        setResult(venta.toString());
        setGanancia(ganancia.toString());
        Keyboard.dismiss();
    }

    const limpiar = () => {
        setForm({
            costo: '',
            aumento: ''
        });
        setResult('0.0');
        setGanancia('0.0');
    }

    return (
        <View>
                <View style={styles.calculationPanel}>
                    <View style={styles.simpleEntries}>
                        <View style={{flex: 2, marginRight: 5, marginBottom: 10}}>
                            <Text style={styles.labelNumberInput}>Costo $</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <CInputNumber placeHolder="0.0" value={form.costo} onChanges={onChanges} name="costo"/>
                        </View>
                    </View>
                    <View style={styles.simpleEntries}>
                        <View style={{flex: 2, marginRight: 5}}>
                            <Text style={styles.labelNumberInput}>Aumento %</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <CInputNumber placeHolder="0.0" value={form.aumento} onChanges={onChanges} name="aumento"/>
                        </View>
                    </View>
                    <ActionsButtonsComponent calcular={calcular} limpiar={limpiar}/>
                </View>
                <View style={{margin: 30}}>
                    <Text style={{textAlign: 'center', fontSize: 20, color: '#37cc70' }}>Precio de venta:</Text>
                    <Text style={{textAlign: 'center', fontSize: 50, color: '#37cc70' }}>{result}</Text>

                    <Text style={{textAlign: 'center', fontSize: 20, color: '#37cc70', marginTop: 30 }}>Ganancia:</Text>
                    <Text style={{textAlign: 'center', fontSize: 30, color: '#37cc70' }}>{ganancia}</Text>
                </View>
        </View>
    )
}