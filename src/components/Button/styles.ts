import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const ActionButton = styled(RectButton)`
    background-color: ${props => props.theme.colors.primary};
    border-radius: 12px;
    height: 50px;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

export const ActionText = styled.Text`
    color: ${props => props.theme.colors.text};
    font-size: 15px;
    font-weight: bold;
`