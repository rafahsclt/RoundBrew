import React from 'react'

import Button from '../../components/Button'
import Header from '../../components/Header'
import UndecoratedButton from '../../components/UndecoratedButton'

import { Container, Title, Description } from './styles'

const Connection: React.FC = () => {
    return (
        <Container>
            <Header title="Connections" />
            <Title>Bem-vindo</Title>
            <Description>Escolha o tipo de conexão</Description>
            <Button 
                buttonText="Wifi" 
                onPress={() => {}}
            />
            <Button 
                buttonText="Bluetooth Low Energy" 
                onPress={() => {}}
            />
            <UndecoratedButton 
                buttonText="Visualizar receitas"
                onPress={() => {}}
            />
        </Container>
    )
}

export default Connection