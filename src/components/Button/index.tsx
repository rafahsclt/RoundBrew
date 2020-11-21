import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { ActionButton, ActionText } from './styles'

interface ButtonProps extends TouchableOpacityProps {
    isEnable?: boolean
    width?: string
}

const Button: React.FC<ButtonProps> = ({ children, width='100%', isEnable = true, ...rest }) => {
    return (
        <ActionButton {...rest} isEnable={isEnable} width={width}>
            <ActionText>{children}</ActionText>
        </ActionButton>
    )
}

export default Button