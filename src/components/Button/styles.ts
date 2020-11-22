import styled, { css } from 'styled-components/native'

interface ButtonProps {
    isEnable: boolean
    width: string
}

export const ActionButton = styled.TouchableOpacity<ButtonProps>`
    background-color: ${props => props.isEnable ? props.theme.colors.primary : props.theme.colors.disabled };
    border-radius: 12px;
    height: 50px;
    width: ${props => props.width};
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    flex-direction: row;
`

export const ActionText = styled.Text`
    color: ${props => props.theme.colors.text};
    font-size: 15px;
    font-weight: bold;
    margin-right: 10px;
`