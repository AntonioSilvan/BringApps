import React from "react";
import { View, Text } from 'react-native';
import { styles } from "../../theme/AppTheme";
import { abstyle } from './ActionButton.style';

export const ActionsButtonsComponent = () => {
    return(
        <View>
            <View style={abstyle.panelActions}>
                <Text style={abstyle.buttonCalcular}>CALCULAR</Text>
                <Text style={abstyle.buttonLimpiar}>LIMPIAR</Text>
            </View>
        </View>
    );
}