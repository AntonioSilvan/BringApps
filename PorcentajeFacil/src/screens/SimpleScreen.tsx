import React, { useState } from "react";
import { Text, View, TextInput, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { styles } from "../theme/AppTheme";
import { ActionsButtonsComponent } from '../components/ActionButtons/ActionButtons.component';
import { CTextInput } from "../components/CTexxtInput.component";
//^(0|[1-9]|[1-9][0-9]*)(\.[0-9]{0,3})?$
export const SimpleScreen = () => {

    const [ result, setResult ] = useState('0.0');
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
        setResult(result.toString());
    }

    const limpiar = () => {
        setForm({
            porcentaje: '',
            cantidad: ''
        });
        setResult('0.0');
    }

    return (
        <View>
                <View style={styles.calculationPanel}>
                    <View style={styles.simpleEntries}>
                        <View style={{flex: 2}}>
                            <CTextInput placeHolder="0.0" value={form.porcentaje} onChanges={onChanges} name="porcentaje"/>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.labelNumberInput}>% De </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <CTextInput placeHolder="0.0" value={form.cantidad} onChanges={onChanges} name="cantidad"/>
                        </View>
                    </View>
                    <ActionsButtonsComponent calcular={calcular} limpiar={limpiar}/>
                </View>
                <View style={{margin: 30}}>
                    <Text style={{textAlign: 'center', fontSize: 20, color: '#37cc70' }}>Resultado:</Text>
                    <Text style={{textAlign: 'center', fontSize: 50, color: '#37cc70' }}>{result}</Text>
                </View>
        </View>
    )
}