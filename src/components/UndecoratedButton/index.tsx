import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { ActionButton, ActionText } from './styles'

interface ButtonProps extends TouchableOpacityProps {
    buttonText: string
}

const Button: React.FC<ButtonProps> = ({ buttonText, ...rest }) => {
    return (
        <ActionButton {...rest} >
            <ActionText>{buttonText}</ActionText>
        </ActionButton>
    )
}

export default Button