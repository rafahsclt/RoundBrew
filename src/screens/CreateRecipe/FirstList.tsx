import React, { useCallback, useRef } from 'react'
import { View, KeyboardAvoidingView, ScrollView, Platform, TextInput } from 'react-native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { useRecipe } from '../../hooks/useRecipe'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { INRListOne } from '../../_types/NRList'
import { Title } from './styles'

interface IPage {
    setPage(n: number): void
}

const FirstList: React.FC<IPage> = ({ setPage }) => {
    const formRef = useRef<FormHandles>(null)

    const { NRListOne, setNRListOne } = useRecipe()

    const yeastRef = useRef<TextInput>(null)
    const boilRef = useRef<TextInput>(null)
    const brewRef = useRef<TextInput>(null)
    const maturationRef = useRef<TextInput>(null)

    const handleSubmit = useCallback((data: INRListOne) => {
        setPage(1)
        setNRListOne(data)
        console.log(data)
    }, [])

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
            <ScrollView
                contentContainerStyle={{ flex: 1 }}
            >
                <Title>Cadastre uma nova receita : </Title>
                <Form
                    onSubmit={handleSubmit}
                    ref={formRef}
                    style={{ flex: 1, justifyContent: "space-between"}}
                >
                    <View>
                    <Input
                        name="Nome da receita"
                        tag="beerName"
                        returnKeyType="next"
                        onSubmitEditing={() => yeastRef.current?.focus()}
                        defaultValue={NRListOne.beerName}                        
                    />
                    <Input
                        ref={yeastRef}
                        name="Fermento"
                        tag="yeast"
                        returnKeyType="next"
                        onSubmitEditing={() => boilRef.current?.focus()}
                        defaultValue={NRListOne.yeast}                        
                    />
                    <Input
                        ref={boilRef}
                        name="Tempo de Fervura (min)"
                        tag="boilTime"
                        returnKeyType="next"
                        onSubmitEditing={() => brewRef.current?.focus()}
                        defaultValue={NRListOne.boilTime?.toString()}                        
                    />
                    <Input
                        ref={brewRef}
                        name="Tempo de Fermentação (dias)"
                        tag="brewTime"
                        returnKeyType="next"
                        onSubmitEditing={() => yeastRef.current?.focus()}
                        defaultValue={NRListOne.brewTime?.toString()}                        
                    />
                    <Input
                        ref={maturationRef}
                        name="Tempo de Maturação (dias)"
                        tag="maturationTime"
                        returnKeyType="route"
                        onSubmitEditing={() => formRef.current?.submitForm()}
                        defaultValue={NRListOne.maturationTime?.toString()}                        
                    />
                    
                    </View>
                    <Button
                        onPress={() => formRef.current?.submitForm()}
                    >Próximo</Button>
                </Form>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default FirstList