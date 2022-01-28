import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors, Sizes } from "../constants";
import React from "react";

export interface props {
    txt: string,
    selected: string,
    setSelected: (val: string) => void,
    submit: boolean
}

export default function FormButton({ txt, selected, setSelected, submit }: props) {
    const onPress = () => {
        if (selected === txt) {
            setSelected('')
        }
        else {
            setSelected(txt)
        }
    }
    return (
        <>
            {selected === txt ? <TouchableOpacity style={styles.blank} onPress={onPress}></TouchableOpacity> :

                <>
                    {submit ? <View style={[styles.btn, { width: (100 + (txt.length - 5) * 10) }, { backgroundColor: '#fff7', elevation: 0 }]}>
                        <Text style={[styles.text, { color: '#0003' }]}>{txt}</Text>
                    </View> : <TouchableOpacity style={[styles.btn, { width: (100 + (txt.length - 5) * 10) }]} onPress={onPress}>
                        <Text style={styles.text}>{txt}</Text>
                    </TouchableOpacity>}
                </>
            }
        </>

    )
}


const styles = StyleSheet.create({
    text: {
        color: Colors.secondary,
        fontWeight: 'bold',
        fontSize: Sizes.font * 1.2
    },
    btn: {
        backgroundColor: 'white',
        borderRadius: Sizes.radius * 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 50,
        marginHorizontal: Sizes.base,
        marginVertical: Sizes.base,
        elevation: 8
    },
    blank: {
        borderRadius: Sizes.radius * 1.5,
        width: 100,
        height: 50,
        marginHorizontal: Sizes.base,
        marginVertical: Sizes.base,
        backgroundColor: '#fff3'
    }
})
