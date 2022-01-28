import { Text, View, StyleSheet } from "react-native";
import { Colors, Sizes } from "../constants";
import React from "react";

export interface ans {
    val: string,
    correct: number
}

export default function Answer({ val, correct }: ans) {
    const st = correct ? { backgroundColor: `${correct === 1 ? Colors.cyan : Colors.orange}` } : {}
    return (
        <View style={[styles.container, st]}>
            <Text style={styles.txt} >
                {val}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: '100%',
        marginHorizontal: Sizes.base,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: Sizes.radius * 1.5
    },
    txt: {
        color: Colors.secondary,
        fontSize: Sizes.font,
        fontWeight: 'bold'
    }
})