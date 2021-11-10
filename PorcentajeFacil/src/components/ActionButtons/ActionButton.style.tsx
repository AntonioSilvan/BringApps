import { StyleSheet } from 'react-native';

export const abstyle = StyleSheet.create({
    panelActions: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    buttonCalcular: {
        fontSize: 15, 
        color: '#37cc70', 
        backgroundColor: 'white', 
        padding: 10,
        borderRightWidth: 1,
        borderRightColor: '#37cc70',
        borderTopLeftRadius: 10, 
        borderBottomLeftRadius: 10
    },

    buttonLimpiar: {
        fontSize: 15, 
        color: '#37cc70', 
        backgroundColor: 'white',
        borderLeftWidth: 1,
        borderLeftColor: '#37cc70', 
        borderTopRightRadius: 10, 
        borderBottomRightRadius: 10, 
        padding: 10
    }
});