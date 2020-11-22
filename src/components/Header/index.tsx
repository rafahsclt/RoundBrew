import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { Image, TouchableOpacity, Switch, SwitchProps } from 'react-native' 
import Icon from 'react-native-vector-icons/Feather'
import { useRecipe } from '../../hooks/useRecipe'

import { Container, Text } from './styles'

import logoImg from '../../assets/images/light-maltum-logo.png'

interface HeaderProps extends SwitchProps {
    title: string
    iconName?: string
    hasSwitch?: boolean
    clearRecipe?: boolean
}

const Header: React.FC<HeaderProps> = ({ title, iconName, clearRecipe, hasSwitch, ...rest }) => {
    const { colors, path } = useContext(ThemeContext) 
    const { clearSelectedRecipe } = useRecipe()
    const { goBack } = useNavigation()

    return (
        <Container>
            {iconName && (
                <TouchableOpacity
                    onPress={() => {
                        if(clearRecipe) clearSelectedRecipe()
                        goBack()
                    }}
                >
                    <Icon name={iconName} size={28} color={colors.primary} />
                </TouchableOpacity>
            )}
            <Text>{title}</Text>
            {hasSwitch ?  
            <Switch 
                {...rest}
            />
                :
            <Image source={logoImg} />}
            
        </Container>
    )
}

export default Header