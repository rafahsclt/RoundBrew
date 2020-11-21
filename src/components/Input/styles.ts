import styled, { css } from 'styled-components/native'

interface FocusedProps {
    isFocused: boolean
    isFilled: boolean
    width?: string
}

export const Container = styled.View<FocusedProps>`
    width: ${props => props.width};
    height: 60px;
    padding: 0 16px;
    margin: 20px 2px;
    border-radius: 10px;
    margin-bottom: 8px;
    position: relative;
    background-color: ${props => props.theme.colors.background};
    border: 1px solid ${props => 
        (props.isFocused || props.isFilled) ? 
        props.theme.colors.primary :
        props.theme.colors.inputBackground};
    position: relative;
`

export const TextInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
`

export const LabelView = styled.View<FocusedProps>`
    position: absolute;
    top: 20px;
    left: 25px;
    background-color: ${props => props.theme.colors.background};

    ${props => (props.isFocused || props.isFilled) && css`
        top: -10px;
        left: 10px;
        padding: 0 10px;
    `}
`

export const Label = styled.Text<FocusedProps>`
    font-size: ${props => 
        (props.isFocused || props.isFilled ) 
        ? '12px' : '16px'};
    color: ${props => 
        ( props.isFocused || props.isFilled ) 
        ? props.theme.colors.primary 
        : props.theme.colors.inputText};
`