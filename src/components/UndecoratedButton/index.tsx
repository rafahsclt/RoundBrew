import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { ActionButton, ActionText } from './styles'

const Button: React.FC<TouchableOpacityProps> = ({ children, ...rest }) => {
    return (
        <ActionButton {...rest} >
            <ActionText>{children}</ActionText>
        </ActionButton>
    )
}

export default Button