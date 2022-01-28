import { Colors, Sizes, images } from '../constants';
import { Answer, FormButton, SubmitButton, ToolText, ToolTip } from '../components';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export default function Quiz({ exercises, setFinish }: any) {
    const [page, setPage] = useState(0)
    const ex = exercises[page]
    const index = ex.language1.indexOf(ex.qword)
    const part1 = ex.language1.slice(0, index).trim()
    const part2 = ex.language1.slice(index + ex.qword.length).trim()
    const i1 = ex.language2.indexOf(ex.answord)
    const qp1 = ex.language2.slice(0, i1).trim().split(' ')
    const qp2 = ex.language2.slice(i1 + ex.answord.length).trim().split(' ')
    const wh1 = ex.language1.split(' ')
    const wh2 = ex.language2.split(' ')
    const [pos, setPos] = useState([
        0, 50, 100
    ])
    const [visible, setVisible] = useState('')
    const [selected, setSelected] = useState('')
    const [submit, setSubmit] = useState(false)
    const correct = () => {
        if (submit) {
            if (selected === ex.answord) {
                return 1
            }
            return 2
        }
        return 0
    }
    const color = () => {
        if (submit) {
            if (selected === ex.answord) {
                return Colors.cyan
            }
            return Colors.orange
        }
        return Colors.secondary
    }
    const setVis = (vis: string) => setVisible(vis)
    const setSel = (val: string) => setSelected(val)
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={[styles.h3, { marginTop: Sizes.padding * 2 }]}>
                    Fill in the missing word
                </Text>
                <Text style={[styles.h1, styles.marginTop]}>
                    {part1}{' '} <Text style={[styles.underline, styles.bold]}>{ex.qword}</Text>{'  '}{part2}
                </Text>
                <View style={[styles.tooltip, { left: pos[wh1.indexOf(visible)] }]}>
                    {visible ? <ToolTip tool={visible} /> :
                        <View style={{
                            height: 65
                        }}></View>
                    }
                </View>
                <View style={[styles.h2, { marginTop: Sizes.padding * 3 }]}>
                    {qp1.map((i: string) => {
                        return <ToolText key={i} text={i} tool={wh1[wh2.indexOf(i)]} visible={visible} setVisible={setVis} pos={pos} setPos={(v: number[]) => setPos(v)} index={wh2.indexOf(i)} />
                    })}
                    {selected ?
                        <Answer val={selected} correct={correct()} />
                        : <View style={styles.dash}></View>}
                    {qp2.map((i: string) => {
                        return <ToolText key={i} text={i} tool={wh1[wh2.indexOf(i)]} visible={visible} setVisible={setVis} pos={pos} setPos={(v: number[]) => setPos(v)} index={wh2.indexOf(i)} />
                    })}
                </View>
                <View style={styles.options}>
                    {ex.options.slice(0, 2).map((option: string) => {
                        return <FormButton txt={option} key={option} setSelected={setSel} selected={selected} submit={submit} />
                    })}</View>
                <View style={styles.options}>
                    {ex.options.slice(2, 4).map((option: string) => {
                        return <FormButton txt={option} key={option} setSelected={setSel} selected={selected} submit={submit} />
                    })}
                </View>
                <View style={[styles.footer, { backgroundColor: color() }]}>
                    {submit &&
                        <View style={styles.pre}>
                            <Text style={styles.ptxt}>
                                {color() === Colors.cyan ? 'Great Job!' : `Answer:${ex.answord}`}
                            </Text>
                            <Image source={images.flag} style={styles.img} />
                        </View>}
                    <SubmitButton submit={submit}
                        setSubmit={(val: boolean) => setSubmit(val)}
                        selected={selected} correct={selected === ex.answord}
                        setPage={(val: number) => setPage(val)}
                        index={page}
                        setSel={setSel}
                        setVis={setVis}
                        setFinish={setFinish}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        position: 'absolute',
        bottom: 0,
        height: Sizes.height * 0.85,
        backgroundColor: Colors.secondary,
        width: '100%',
        alignItems: 'center',
        borderTopLeftRadius: Sizes.padding,
        borderTopRightRadius: Sizes.padding
    },
    h3: {
        fontSize: Sizes.h3,
        color: Colors.gray
    },
    h1: {
        fontSize: Sizes.h1,
        color: 'white'
    },
    underline: {
        textDecorationLine: 'underline'
    },
    bold: {
        fontWeight: 'bold'
    },
    marginTop: {
        marginTop: Sizes.padding
    },
    dash: {
        borderBottomWidth: 3,
        borderBottomColor: 'white',
        width: 100,
        height: '100%',
        marginHorizontal: Sizes.base
    },
    h2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: Sizes.padding * 2,
        height: 50
    },
    tooltip: {
        position: 'absolute',
        top: 150
    },
    options: {
        flexDirection: 'row'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 150,
        borderTopLeftRadius: Sizes.radius * 2,
        borderTopRightRadius: Sizes.radius * 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pre: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Sizes.base * 2
    },
    ptxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: Sizes.font * 1.1
    },
    img: {
        width: Sizes.font * 1.4,
        height: Sizes.font * 1.4,
        tintColor: 'white',
        resizeMode: 'cover'
    }
});
