import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    sceneContainer: {
        backgroundColor: 'white',
        flex: 1,
    },
// #3ab982 verde
// #344860 azul
//verde #37cc70
    calculationPanel: {
        backgroundColor: '#37cc70',
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
        padding: 20
    },

    simpleEntries: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    numberInput: {
        borderColor: 'white', 
        borderBottomWidth: 2, 
        borderRadius: 5, 
        fontSize: 25,
        color: 'white',
        width: 'auto'
    },

    labelNumberInput:{
        color: 'white',
        fontSize: 25,
        paddingVertical: 15
    }    
});