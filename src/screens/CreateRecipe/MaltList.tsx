import React, { useCallback, useRef, useState } from 'react'
import { View, KeyboardAvoidingView, ScrollView, Platform, TextInput } from 'react-native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { useRecipe } from '../../hooks/useRecipe'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { INRListTwo } from '../../_types/NRList'
import { Title, DoubleContainer, SliderContainer, StyledSlider, SliderText } from './styles'

interface IPage {
    setPage(n: number): void
}

const MaltList: React.FC<IPage> = ({ setPage }) => {
    const formRef = useRef<FormHandles>(null)
    const { NRListTwo, setNRListTwo } = useRecipe()

    const [quantityMalts, setQuantityMalts] = useState(NRListTwo.quantityMalts)

    const refNameMaltTwo = useRef<TextInput>(null)
    const refNameMaltThree = useRef<TextInput>(null)
    const refNameMaltFour = useRef<TextInput>(null)
    const refNameMaltFive = useRef<TextInput>(null)
    const refWeightMaltOne = useRef<TextInput>(null)
    const refWeightMaltTwo = useRef<TextInput>(null)
    const refWeightMaltThree = useRef<TextInput>(null)
    const refWeightMaltFour = useRef<TextInput>(null)
    const refWeightMaltFive = useRef<TextInput>(null)

    const handleSubmit = useCallback(async (data: INRListTwo) => {
        const listTwo = Object.assign(data, { quantityMalts })
        setNRListTwo(listTwo)
        console.log(listTwo)
    }, [quantityMalts, setNRListTwo])

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
            <ScrollView
                contentContainerStyle={{ flex: 1 }}
            >
                <Title>Quantidade de malte(s)</Title>
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
                                value={quantityMalts}
                                minimumTrackTintColor="#FFA707"
                                maximumTrackTintColor="#000000"
                                onValueChange={v => setQuantityMalts(v)}
                            />
                            <SliderText>{quantityMalts}</SliderText>
                        </SliderContainer>
                        {quantityMalts >= 1 && (
                            <DoubleContainer>
                                <Input
                                    name="Nome M1"
                                    tag="nameMaltOne"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refWeightMaltOne.current?.focus()}
                                    defaultValue={NRListTwo.nameMaltOne}                                    
                                />
                                <Input
                                    ref={refWeightMaltOne}
                                    name="Peso M1 (g)"
                                    tag="weightMaltOne"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refNameMaltTwo.current?.focus()}
                                    defaultValue={NRListTwo.weightMaltOne?.toString()}                                    
                                />
                            </DoubleContainer>
                        )}
                        {quantityMalts >= 2 && (
                            <DoubleContainer>
                                <Input
                                    ref={refNameMaltTwo}
                                    name="Nome M2"
                                    tag="nameMaltTwo"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refWeightMaltTwo.current?.focus()}
                                    defaultValue={NRListTwo.nameMaltTwo}                                    
                                />
                                <Input
                                    ref={refWeightMaltTwo}
                                    name="Peso M2 (g)"
                                    tag="weightMaltTwo"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refNameMaltThree.current?.focus()}
                                    defaultValue={NRListTwo.weightMaltTwo?.toString()}                                    
                                />
                            </DoubleContainer>
                        )}
                        {quantityMalts >= 3 && (
                            <DoubleContainer>
                                <Input
                                    name="Nome M3"
                                    tag="nameMaltThree"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refWeightMaltThree.current?.focus()}
                                    defaultValue={NRListTwo.nameMaltThree}                                    
                                />
                                <Input
                                    ref={refWeightMaltThree}
                                    name="Peso M3 (g)"
                                    tag="weightMaltThree"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refNameMaltFour.current?.focus()}
                                    defaultValue={NRListTwo.weightMaltThree?.toString()}                                    
                                />
                            </DoubleContainer>
                        )}
                        {quantityMalts >= 4 && (
                            <DoubleContainer>
                                <Input
                                    name="Nome M4"
                                    tag="nameMaltFour"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refWeightMaltFour.current?.focus()}
                                    defaultValue={NRListTwo.nameMaltFour}                                    
                                />
                                <Input
                                    ref={refWeightMaltFour}
                                    name="Peso M4 (g)"
                                    tag="weightMaltFour"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refNameMaltFive.current?.focus()}
                                    defaultValue={NRListTwo.weightMaltFour?.toString()}                                    
                                />
                            </DoubleContainer>
                        )}
                        {quantityMalts >= 5 && (
                            <DoubleContainer>
                                <Input
                                    name="Nome M5"
                                    tag="nameMaltFive"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refWeightMaltFive.current?.focus()}
                                    defaultValue={NRListTwo.nameMaltFive}                                    
                                />
                                <Input
                                    ref={refWeightMaltFive}
                                    name="Peso M5 (g)"
                                    tag="weightMaltFive"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => formRef.current?.submitForm()}
                                    defaultValue={NRListTwo.weightMaltFive?.toString()}                                    
                                />
                            </DoubleContainer>
                        )}
                        
                    </View>
                    <DoubleContainer>
                        <Button
                            width="47%"
                            onPress={() => {
                                formRef.current?.submitForm()
                                setPage(0)
                            }}
                        >Anterior</Button>
                        <Button
                            width="47%"
                            onPress={() => {
                                formRef.current?.submitForm()
                                setPage(2)
                            }}
                        >Próximo</Button>
                    </DoubleContainer>
                </Form>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default MaltList