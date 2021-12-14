import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert, ToastAndroid } from 'react-native';

interface Props {
    onChanges: (value:string, label:string) => void
    placeHolder?:string
    value?:string
    name:string
}

export const CInputNumber = ({placeHolder, value, name, onChanges}: Props) => {

    const [fail, setFail] = useState(false);

    function validate(value:string) {
        let re = /^(0|[1-9]|[1-9][0-9]*)(\.[0-9]{0,3})?$/;
        let result = re.test(value);
        setFail(false);
        if(!result){
            setFail(true);
            ToastAndroid.show("Entrada incorrecta", ToastAndroid.SHORT);
        }
    }

    return (
        <TextInput
        style={ !fail ? styles.input : {...styles.input, borderColor: 'red', color: 'red' }}
        value={value}
        placeholder={placeHolder}
        keyboardType="numeric"
        keyboardAppearance="dark"
        onChangeText={ (value) => {onChanges(value, name); validate(value)} } />
    )
}

const styles =  StyleSheet.create({
    input: {
        borderColor: 'white',
        borderBottomWidth: 2, 
        borderRadius: 5, 
        fontSize: 25,
        color: 'white',
        width: 'auto'
    },
    inputError: {
        
        
    }
});
//<TextInput style={styles.numberInput} placeholder="0.0" keyboardType="numeric" value={form.porcentaje} onChangeText={ (value) => onChanges(value, 'porcentaje')}/>