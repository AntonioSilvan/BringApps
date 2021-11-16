import React from "react";
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from "../../theme/AppTheme";
import { abstyle } from './ActionButton.style';

interface Props {
    accion: (numero:string) => void
}

export const ActionsButtonsComponent = ( {accion}:Props ) => {
    return(
        <View>
            <View style={abstyle.panelActions}>
                <TouchableOpacity onPress={ () => accion('as')}>
                    <Text style={abstyle.buttonCalcular}>CALCULAR</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={abstyle.buttonLimpiar}>LIMPIAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}