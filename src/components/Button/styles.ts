import styled, { css } from 'styled-components/native'

interface ButtonProps {
    isEnable: boolean
    width: string
}

export const ActionButton = styled.TouchableOpacity<ButtonProps>`
    background-color: ${props => props.theme.colors.primary};
    border-radius: 12px;
    height: 50px;
    width: ${props => props.width};
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    ${props => !props.isEnable && css`
        background-color: #9e9e9e;
    `} 
`

export const ActionText = styled.Text`
    color: ${props => props.theme.colors.text};
    font-size: 15px;
    font-weight: bold;
`