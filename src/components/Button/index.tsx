import React, { useContext } from 'react'
import { TouchableOpacityProps } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { ThemeContext } from 'styled-components'

import { ActionButton, ActionText } from './styles'

interface ButtonProps extends TouchableOpacityProps {
    isEnable?: boolean
    width?: string
    icon?: string
}

const Button: React.FC<ButtonProps> = ({ children, width='100%', icon, isEnable = true, ...rest }) => {
    const { colors } = useContext(ThemeContext)

    return (
        <ActionButton {...rest} isEnable={isEnable} width={width}>
            <ActionText>{children}</ActionText>
            {icon && <Icon name={icon} size={20} color={colors.text} /> }
        </ActionButton>
    )
}

export default Button