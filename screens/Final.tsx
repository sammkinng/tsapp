import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Sizes } from "../constants";
import React from "react";

export default function Final({ setComplete }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Quiz completed sucessfully!!</Text>
            <TouchableOpacity onPress={() => setComplete(false)} style={styles.btn}>
                <Text style={styles.btxt}>Attempt again</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.primary,
        justifyContent: 'center'
    },
    txt: {
        fontSize: Sizes.h1
    },
    btn: {
        width: '80%',
        height: 50,
        borderRadius: 100,
        backgroundColor: Colors.secondary,
        marginTop: Sizes.padding * 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btxt: {
        fontSize: Sizes.body1,
        fontWeight: 'bold',
        color: 'white'
    }
})