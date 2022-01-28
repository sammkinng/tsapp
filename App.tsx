import { useEffect, useState } from 'react';
import React from 'react';
import firestore from '@react-native-firebase/firestore'
import { Text, View } from 'react-native';
import { Colors, Sizes } from './constants';
import Final from './screens/Final';
import Quiz from './screens/Quiz';

const ex1: any = [
    {
        language1: 'The house is small',
        language2: 'Das Hause ist klein',
        qword: 'house',
        answord: 'Hause',
        options: [
            'folgen', 'Schaf', 'Bereiden', 'Hause'
        ],
    },
    {
        language1: 'The tree is big',
        language2: 'el arbol es grande',
        qword: 'tree',
        answord: 'arbol',
        options: [
            'arbol', 'el', 'lee', 'Hola'
        ],
    },
    {
        language1: 'Thanks to your smile',
        language2: 'Gracias a tu sonrisa',
        qword: 'Thanks',
        answord: 'Gracias',
        options: [
            'folgen', 'jalebi', 'Gracias', 'baby'
        ],
    },
    {
        language1: 'The sun is hot',
        language2: 'el sol esta caliente',
        qword: 'sun',
        answord: 'sol',
        options: [
            'moon', 'Schaf', 'lee', 'sol'
        ],
    },
    {
        language1: 'The water is cold',
        language2: 'el agua esta fria',
        qword: 'cold',
        answord: 'fria',
        options: [
            'harminica', 'bonjour', 'fria', 'Hause'
        ],
    },
    {
        language1: '',
        language2: '',
        qword: '',
        answord: '',
        options: ['', '', '', '']
    }
]



export default function App() {
    const [ex, setEx]: any[] = useState([])
    const [ready, setReady] = useState(false)
    const [finish, setFinish] = useState(false)
    useEffect(() => {
        const getEx = async () => {
            try {
                await firestore()
                    .collection('exercises')
                    .onSnapshot(querySnapshot => {
                        const exs: any[] = [];

                        querySnapshot.forEach(documentSnapshot => {
                            exs.push({
                                ...documentSnapshot.data(),
                                key: documentSnapshot.id,
                            });
                        });
                        setEx(exs);
                        console.log('success')
                        setReady(true)
                    });
            } catch (e) {
                console.log(e)
            }
        }
        getEx()
    }, [])
    return (
        <>
            {ready ? <>
                {
                    finish ? <Final setComplete={(val: boolean) => setFinish(val)} /> :
                        <Quiz setFinish={(val: boolean) => setFinish(val)} exercises={ex} />
                }
            </> : <Loading />}
        </>
    )
}


const Loading = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.primary
        }}>
            <Text style={{ fontSize: Sizes.body1 }}>
                ...Loading</Text>
        </View>
    )
}

