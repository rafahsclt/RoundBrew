import styled from 'styled-components/native'

export const ActionButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const ActionText = styled.Text`
    color: ${props => props.theme.colors.secondary};
    text-decoration-line: underline;
    font-weight: bold;
`