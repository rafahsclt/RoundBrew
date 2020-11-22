import React, { useCallback, useRef, useState } from 'react'
import { View, KeyboardAvoidingView, ScrollView, Platform, TextInput } from 'react-native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { useRecipe } from '../../hooks/useRecipe'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { INRListFive } from '../../_types/NRList'
import { Title, DoubleContainer, SliderContainer, StyledSlider, SliderText } from './styles'

interface IPage {
    setPage(n: number): void
    setShowModal(b: boolean): void
}

const HopTimeList: React.FC<IPage> = ({ setPage, setShowModal }) => {
    const formRef = useRef<FormHandles>(null)
    const { NRListFive, setNRListFive, NRListThree } = useRecipe()

    const [quantityHops, setQuantityHops] = useState(NRListThree.quantityHops | 1)

    const refTimeHopTwo = useRef<TextInput>(null)
    const refTimeHopThree = useRef<TextInput>(null)
    const refTimeHopFour = useRef<TextInput>(null)
    const refTimeHopFive = useRef<TextInput>(null)

    const handleSubmit = useCallback(async (data: INRListFive) => {
        setNRListFive(data)
        console.log(data)
    }, [quantityHops, setNRListFive])

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
            <ScrollView
                contentContainerStyle={{ flex: 1 }}
            >
                <Title>Tempo do(s) Lúpulos</Title>
                <Form
                    onSubmit={handleSubmit}
                    ref={formRef}
                    style={{ flex: 1, justifyContent: "space-between" }}
                >
                    <View>
                        {quantityHops >= 1 && (
                            <Input
                                name="Tempo L1 (min)"
                                tag="timeHopOne"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    if (quantityHops !== 1) refTimeHopTwo.current?.focus()
                                    else {
                                        formRef.current?.submitForm()
                                        setShowModal(true)
                                    }
                                }}
                                defaultValue={NRListFive.timeHopOne?.toString()}
                            />
                        )}
                        {quantityHops >= 2 && (
                            <Input
                                ref={refTimeHopTwo}
                                name="Tempo L2 (min)"
                                tag="nameHopTwo"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    if (quantityHops !== 2) refTimeHopThree.current?.focus()
                                    else {
                                        formRef.current?.submitForm()
                                        setShowModal(true)
                                    }
                                }}
                                defaultValue={NRListFive.timeHopTwo?.toString()}
                            />
                        )}
                        {quantityHops >= 3 && (
                            <Input
                                ref={refTimeHopThree}
                                name="Tempo L3 (min)"
                                tag="nameHopThree"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    if (quantityHops !== 3) refTimeHopFour.current?.focus()
                                    else {
                                        formRef.current?.submitForm()
                                        setShowModal(true)
                                    }
                                }}
                                defaultValue={NRListFive.timeHopThree?.toString()}
                            />
                        )}
                        {quantityHops >= 4 && (
                            <Input
                                ref={refTimeHopFour}
                                name="Tempo L4 (min)"
                                tag="nameHopFour"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    if (quantityHops !== 4) refTimeHopFive.current?.focus()
                                    else {
                                        formRef.current?.submitForm()
                                        setShowModal(true)
                                    }
                                }}
                                defaultValue={NRListFive.timeHopFour?.toString()}
                            />
                        )}
                        {quantityHops >= 5 && (
                            <Input
                                ref={refTimeHopFive}
                                name="Tempo L5 (min)"
                                tag="nameHopFive"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    formRef.current?.submitForm()
                                    setShowModal(true)
                                }}
                                defaultValue={NRListFive.timeHopFive?.toString()}
                            />
                        )}

                    </View>
                    <DoubleContainer>
                        <Button
                            width="47%"
                            onPress={() => {
                                formRef.current?.submitForm()
                                setPage(3)
                            }}
                        >Anterior</Button>
                        <Button
                            width="47%"
                            onPress={() => {
                                formRef.current?.submitForm()
                                setShowModal(true)
                            }}
                        >Finalizar</Button>
                    </DoubleContainer>
                </Form>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default HopTimeList