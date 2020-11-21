import React, { useCallback, useRef, useState } from 'react'
import { View, KeyboardAvoidingView, ScrollView, Platform, TextInput } from 'react-native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { useRecipe } from '../../hooks/useRecipe'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { INRListFour } from '../../_types/NRList'
import { Title, DoubleContainer, SliderContainer, StyledSlider, SliderText } from './styles'

interface IPage {
    setPage(n: number): void
}

const RampList: React.FC<IPage> = ({ setPage }) => {
    const formRef = useRef<FormHandles>(null)
    const { NRListFour, setNRListFour } = useRecipe()

    const [quantityRamps, setQuantityRamps] = useState(NRListFour.quantityRamps | 1)

    const refTimeRampTwo = useRef<TextInput>(null)
    const refTimeRampThree = useRef<TextInput>(null)
    const refTimeRampFour = useRef<TextInput>(null)
    const refTimeRampFive = useRef<TextInput>(null)
    const refTempRampOne = useRef<TextInput>(null)
    const refTempRampTwo = useRef<TextInput>(null)
    const refTempRampThree = useRef<TextInput>(null)
    const refTempRampFour = useRef<TextInput>(null)
    const refTempRampFive = useRef<TextInput>(null)

    const handleSubmit = useCallback(async (data: INRListFour) => {
        const listFour = Object.assign(data, { quantityRamps })
        setNRListFour(listFour)
        console.log(listFour)
    }, [quantityRamps, setNRListFour])

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
                                value={quantityRamps}
                                minimumTrackTintColor="#FFA707"
                                maximumTrackTintColor="#000000"
                                onValueChange={v => setQuantityRamps(v)}
                            />
                            <SliderText>{quantityRamps}</SliderText>
                        </SliderContainer>
                        {quantityRamps >= 1 && (
                            <DoubleContainer>
                                <Input
                                    name="Tempo R1 (min)"
                                    tag="timeRampOne"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refTempRampOne.current?.focus()}
                                    defaultValue={NRListFour.timeRampOne?.toString()}                                    
                                />
                                <Input
                                    ref={refTempRampOne}
                                    name="Temperat. R1 (ºC)"
                                    tag="tempRampOne"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refTimeRampTwo.current?.focus()}
                                    defaultValue={NRListFour.tempRampOne?.toString()}                                    
                                />
                            </DoubleContainer>
                        )}
                        {quantityRamps >= 2 && (
                            <DoubleContainer>
                                <Input
                                    ref={refTimeRampTwo}
                                    name="Tempo R2 (min)"
                                    tag="timeRampTwo"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refTempRampTwo.current?.focus()}
                                    defaultValue={NRListFour.timeRampTwo?.toString()}                                    
                                />
                                <Input
                                    ref={refTempRampTwo}
                                    name="Temperat. R2 (ºC)"
                                    tag="tempRampTwo"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refTimeRampThree.current?.focus()}
                                    defaultValue={NRListFour.tempRampTwo?.toString()}                                    
                                />
                            </DoubleContainer>
                        )}
                        {quantityRamps >= 3 && (
                            <DoubleContainer>
                                <Input
                                    ref={refTimeRampThree}
                                    name="Tempo R3 (min)"
                                    tag="timeRampThree"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refTempRampThree.current?.focus()}
                                    defaultValue={NRListFour.timeRampThree?.toString()}                                    
                                />
                                <Input
                                    ref={refTempRampThree}
                                    name="Temperat. R3 (ºC)"
                                    tag="tempRampThree"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refTimeRampFour.current?.focus()}
                                    defaultValue={NRListFour.tempRampThree?.toString()}                                    
                                />
                            </DoubleContainer>
                        )}
                        {quantityRamps >= 4 && (
                            <DoubleContainer>
                                <Input
                                    ref={refTimeRampFour}
                                    name="Tempo R4 (min)"
                                    tag="timeRampFour"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refTempRampFour.current?.focus()}
                                    defaultValue={NRListFour.timeRampFour?.toString()}                                    
                                />
                                <Input
                                    ref={refTempRampFour}
                                    name="Temperat. R4 (ºC)"
                                    tag="tempRampFour"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refTimeRampFive.current?.focus()}
                                    defaultValue={NRListFour.tempRampFour?.toString()}                                    
                                />
                            </DoubleContainer>
                        )}
                        {quantityRamps >= 5 && (
                            <DoubleContainer>
                                <Input
                                    ref={refTimeRampFive}
                                    name="Tempo R5 (min)"
                                    tag="timeRampFive"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => refTempRampFive.current?.focus()}
                                    defaultValue={NRListFour.timeRampFive?.toString()}                                    
                                />
                                <Input
                                    ref={refTempRampFive}
                                    name="Temperat. R5 (ºC)"
                                    tag="tempRampFive"
                                    width="47%"
                                    returnKeyType="next"
                                    onSubmitEditing={() => formRef.current?.submitForm()}
                                    defaultValue={NRListFour.tempRampFive?.toString()}                                    
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

export default RampList