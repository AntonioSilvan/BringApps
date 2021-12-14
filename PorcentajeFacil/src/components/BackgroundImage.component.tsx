import React, { Children } from "react";
import { View, Image, StyleSheet } from 'react-native';

interface Props {
    children: any
    imageSource: any
}
export const BackgroundImage = ( { children, imageSource }:Props) => {

    return(
    <View style={styles.imageContainer}>
        <Image style={styles.bgImage} source={imageSource}/>
        {children}
    </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1
    },

    bgImage: {
        flex: 1,
        position: "absolute",
        zIndex: 0,
        opacity: 0.8
    }
});