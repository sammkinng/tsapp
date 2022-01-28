import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Sizes } from "../constants";
import React from "react";

export interface sub {
    submit: boolean,
    setSubmit: (val: boolean) => void,
    selected: string,
    correct: boolean,
    setFinish: (a: boolean) => void,
    index: number,
    setPage: (a: number) => void,
    setSel: (a: string) => void,
    setVis: (a: string) => void,
}

export default function SubmitButton({ submit, setSubmit, selected, correct, index, setPage, setSel, setVis, setFinish }: sub) {
    const color = () => {
        if (submit) {
            if (correct) {
                return ['white', Colors.cyan]
            }
            return ['white', Colors.orange]
        }
        if (selected) {
            return [Colors.cyan, 'white']
        }
        return ['#fff3', 'white']
    }
    const onPress = () => {
        if (submit) {
            if (index < 4) {
                setPage(index + 1)
                setSel('')
                setVis('')
                setSubmit(false)
            }
            else {
                setFinish(true)
                setSel('')
                setVis('')
                setSubmit(false)
            }
        }
        else if (selected) {
            setSubmit(true)
        }
    }
    return (
        <TouchableOpacity style={[styles.submit, { backgroundColor: color()[0] }]} onPress={onPress}>
            <Text style={[styles.txt, { color: color()[1] }]}>{selected && !submit ? 'CHECK ANSWER' : 'CONTINUE'}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    submit: {
        width: '80%',
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontWeight: 'bold',
        fontSize: Sizes.font * 1.2
    }
})