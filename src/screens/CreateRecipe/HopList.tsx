import React, { useCallback, useRef, useState } from 'react'
import { View, KeyboardAvoidingView, ScrollView, Platform, TextInput } from 'react-native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { useRecipe } from '../../hooks/useRecipe'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { INRListThree } from '../../_types/NRList'
import { Title, DoubleContainer, SliderContainer, StyledSlider, SliderText } from './styles'

interface IPage {
    setPage(n: number): void
}

const HopList: React.FC<IPage> = ({ setPage }) => {
    const formRef = useRef<FormHandles>(null)
    const { NRListThree, setNRListThree } = useRecipe()

    const [quantityHops, setQuantityHops] = useState(NRListThree.quantityHops | 1)

    const refNameHopTwo = useRef<TextInput>(null)
    const refNameHopThree = useRef<TextInput>(null)
    const refNameHopFour = useRef<TextInput>(null)
    const refNameHopFive = useRef<TextInput>(null)
    const refWeightHopOne = useRef<TextInput>(null)
    const refWeightHopTwo = useRef<TextInput>(null)
    const refWeightHopThree = useRef<TextInput>(null)
    const refWeightHopFour = useRef<TextInput>(null)
    const refWeightHopFive = useRef<TextInput>(null)

    const handleSubmit = useCallback(async (data: INRListThree) => {
        const listThree = Object.assign(data, { quantityHops })
        setNRListThree(listThree)
        console.log(listThree)
    }, [quantityHops, setNRListThree])

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
            <ScrollView
                contentContainerStyle={{ flex: 1 }}
            >
                <Title>Quantidade de Lúpulo(s)</Title>
                <Form
                    onSubmit={handleSubmit}
                    ref={formRef}
                    style={{ flex: 1, justifyContent: "space-between" }}
                >
                    <View>
                        <SliderContainer>
                            <StyledSlider 
                                minimumValue={1}
                                maximumValue={5}
                                step={1}
                                value={quantityHops}
                                minimumTrackTintColor="#FFA707"
                                maximumTrackTintColor="#000000"
                                onValueChange={v => setQuantityHops(v)}
                            />
                            <SliderText>{quantityHops}</SliderText>
                        </SliderContainer>
                        {quantityHops >= 1 && (
                            <DoubleContainer>
                                <Input
                                    name="Nome L1"
                                    tag="nameHopOne"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refWeightHopOne.current?.focus()}
                                    defaultValue={NRListThree.nameHopOne}                                    
                                />
                                <Input
                                    ref={refWeightHopOne}
                                    name="Peso L1 (g)"
                                    tag="weightHopOne"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        if(quantityHops !== 1) refNameHopTwo.current?.focus()
                                        else {
                                            formRef.current?.submitForm()
                                            setPage(3)
                                        }
                                    }}
                                    defaultValue={NRListThree.weightHopOne?.toString()}                                    
                                />
                            </DoubleContainer>
                        )}
                        {quantityHops >= 2 && (
                            <DoubleContainer>
                                <Input
                                    ref={refNameHopTwo}
                                    name="Nome L2"
                                    tag="nameHopTwo"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refWeightHopTwo.current?.focus()}
                                    defaultValue={NRListThree.nameHopTwo}                                    
                                />
                                <Input
                                    ref={refWeightHopTwo}
                                    name="Peso L2 (g)"
                                    tag="weightHopTwo"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        if(quantityHops !== 2) refNameHopThree.current?.focus()
                                        else {
                                            formRef.current?.submitForm()
                                            setPage(3)
                                        }
                                    }}
                                    defaultValue={NRListThree.weightHopTwo?.toString()}                                    
                                />
                            </DoubleContainer>
                        )}
                        {quantityHops >= 3 && (
                            <DoubleContainer>
                                <Input
                                    ref={refNameHopThree}
                                    name="Nome L3"
                                    tag="nameHopThree"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refWeightHopThree.current?.focus()}
                                    defaultValue={NRListThree.nameHopThree}                                    
                                />
                                <Input
                                    ref={refWeightHopThree}
                                    name="Peso L3 (g)"
                                    tag="weightHopThree"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        if(quantityHops !== 3) refNameHopFour.current?.focus()
                                        else {
                                            formRef.current?.submitForm()
                                            setPage(3)
                                        }
                                    }}
                                    defaultValue={NRListThree.weightHopThree?.toString()}                                    
                                />
                            </DoubleContainer>
                        )}
                        {quantityHops >= 4 && (
                            <DoubleContainer>
                                <Input
                                    ref={refNameHopFour}
                                    name="Nome L4"
                                    tag="nameHopFour"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refWeightHopFour.current?.focus()}
                                    defaultValue={NRListThree.nameHopFour}                                    
                                />
                                <Input
                                    ref={refWeightHopFour}
                                    name="Peso L4 (g)"
                                    tag="weightHopFour"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        if(quantityHops !== 4) refNameHopFive.current?.focus()
                                        else {
                                            formRef.current?.submitForm()
                                            setPage(3)
                                        }
                                    }}
                                    defaultValue={NRListThree.weightHopFour?.toString()}                                    
                                />
                            </DoubleContainer>
                        )}
                        {quantityHops >= 5 && (
                            <DoubleContainer>
                                <Input
                                    ref={refNameHopFive}
                                    name="Nome L5"
                                    tag="nameHopFive"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refWeightHopFive.current?.focus()}
                                    defaultValue={NRListThree.nameHopFive}                                    
                                />
                                <Input
                                    ref={refWeightHopFive}
                                    name="Peso L5 (g)"
                                    tag="weightHopFive"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        formRef.current?.submitForm()
                                        setPage(3)
                                    }}
                                    defaultValue={NRListThree.weightHopFive?.toString()}                                    
                                />
                            </DoubleContainer>
                        )}
                        
                    </View>
                    <DoubleContainer>
                        <Button
                            width="47%"
                            onPress={() => {
                                formRef.current?.submitForm()
                                setPage(1)
                            }}
                        >Anterior</Button>
                        <Button
                            width="47%"
                            onPress={() => {
                                formRef.current?.submitForm()
                                setPage(3)
                            }}
                        >Próximo</Button>
                    </DoubleContainer>
                </Form>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default HopList