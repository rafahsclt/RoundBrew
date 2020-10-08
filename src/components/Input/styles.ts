import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: ${props => props.theme.colors.inputBackground};
    border-radius: 10px;
    margin-bottom: 8px;
`

export const TextInput = styled.TextInput`
    flex: 1;
    color: ${props => props.theme.colors.inputText}
`