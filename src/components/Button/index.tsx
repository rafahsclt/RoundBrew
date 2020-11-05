import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { ActionButton, ActionText } from './styles'

interface ButtonProps extends TouchableOpacityProps {
    isEnable?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, isEnable = true, ...rest }) => {
    return (
        <ActionButton {...rest} isEnable={isEnable} >
            <ActionText>{children}</ActionText>
        </ActionButton>
    )
}

export default Button