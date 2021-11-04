import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    sceneContainer: {
        backgroundColor: '#344860',
        flex: 1,
    },
// #3ab982 verde
// #344860 azul
    calculationPanel: {
        backgroundColor: '#eff6ff',
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
        padding: 20
    },

    simpleEntries: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    panelActions: {
        marginTop: 20
    }
});