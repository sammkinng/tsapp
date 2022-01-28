import { Text, StyleSheet, TouchableOpacity } from "react-native"
import { Sizes } from "../constants"
import React from "react"

export interface val {
    text: string,
    tool: string,
    visible: string,
    setVisible: (vis: string) => void,
    pos: number[],
    index: number,
    setPos: (i: number[]) => void
}

export default function ToolText({ text, tool, visible, setVisible, setPos, pos, index }: val) {
    const onPress = () => {
        if (visible === tool) {
            setVisible('')
        }
        else {
            setVisible(tool)
        }
    }
    const onLayout = (event: any) => {
        const arr = [...pos]
        arr[index] = event.nativeEvent.layout.x
        setPos(arr)
    }
    return (
        <TouchableOpacity onPress={onPress} onLayout={onLayout}>
            <Text style={[styles.h2, styles.underline]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    h2: {
        fontSize: Sizes.h2,
        color: 'white',
        marginHorizontal: Sizes.base
    },
    underline: {
        textDecorationLine: 'underline',
        textDecorationStyle: 'dotted'
    },
})