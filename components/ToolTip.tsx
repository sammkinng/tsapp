import { ImageBackground, Text, StyleSheet } from "react-native"
import { images, Sizes } from '../constants'
import React from "react"

export interface vis {
    tool: string
}

export default function ToolTip({ tool }: vis) {
    return (
        <>{tool &&
            <ImageBackground source={images.tooltip} resizeMode="contain" style={styles.img}>
                <Text style={styles.txt}>{tool}</Text>
            </ImageBackground>}
        </>


    )
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        color: 'black',
        fontSize: Sizes.font,
        fontWeight: 'bold'
    }
})