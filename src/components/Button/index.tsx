import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { ActionButton, ActionText } from './styles'

interface ButtonProps extends RectButtonProperties {
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