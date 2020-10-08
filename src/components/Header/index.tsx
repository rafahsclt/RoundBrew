import React from 'react'
import { Image } from 'react-native' 

import { Container, Text } from './styles'

import logoImg from '../../assets/images/logo.png'

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <Container>
            <Text>{title}</Text>
            <Image source={logoImg} />
        </Container>
    )
}

export default Header