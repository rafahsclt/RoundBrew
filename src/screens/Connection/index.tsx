import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

import Button from '../../components/Button'
import Header from '../../components/Header'
import UndecoratedButton from '../../components/UndecoratedButton'

import { Container, Title, Description } from './styles'

const Connection: React.FC = () => {
    const { navigate } = useNavigation()

    return (
        <Container>
            <Header title="Connections" />
            <Title>Bem-vindo</Title>
            <Description>Escolha o tipo de conexão</Description>
            <Button 
                onPress={() => {}}
            >Wifi</Button>
            <Button 
                onPress={() => navigate('Bluetooth')}
            >Bluetooth Low Energy</Button>
            <UndecoratedButton 
                onPress={() => navigate('Recipe')}
            >Visualizar Receitar</UndecoratedButton>
        </Container>
    )
}

export default Connection