import React from "react";
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from "../../theme/AppTheme";
import { abstyle } from './ActionButton.style';

interface Props {
    calcular: () => void,
    limpiar: () => void
}

export const ActionsButtonsComponent = ( {calcular, limpiar}:Props ) => {
    return(
        <View>
            <View style={abstyle.panelActions}>
                <TouchableOpacity onPress={ () => calcular()}>
                    <Text style={abstyle.buttonCalcular}>CALCULAR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => limpiar()}>
                    <Text style={abstyle.buttonLimpiar}>LIMPIAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}