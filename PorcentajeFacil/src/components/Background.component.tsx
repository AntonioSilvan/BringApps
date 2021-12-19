import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "react-native";
import { MenuLateral } from "../../src/navigator/MenuLateral"; 
import Icon from 'react-native-vector-icons/Ionicons';


interface Props {
    children: any
}
export const CBackground = ({children}: Props) => {
    const repeatHorizontalIcons = Array.apply(null, Array(20));
    const repeatVerticalIcons = Array.apply(null, Array(30));
    return(
        <View style={styles.dimensions}>
            <View style={styles.pics}>
                {
                    repeatVerticalIcons.map(el => <View style={styles.wrapVerticalIcons}>
                        {
                            repeatHorizontalIcons.map(icon => <Icon style={{margin: 15}} name="ribbon-outline" size={40} color="#f9f9f9"/>)
                        }
                    </View>)
                }
            </View>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dimensions: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    pics: {
        position: 'absolute',
        zIndex: 0
    },
    wrapVerticalIcons: {
        display: "flex",
        flexDirection: "row"
    },
    content: {
        zIndex: 1,
        flex: 1
    }
})