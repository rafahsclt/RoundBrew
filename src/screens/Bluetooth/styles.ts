import styled, { css } from 'styled-components/native'

interface ModalViewProps {
    isScanning: boolean
}

export const Container = styled.View`
    flex: 1;
    padding: 20px 24px 0;
    background: ${props => props.theme.colors.background};
`

export const ModalView = styled.View<ModalViewProps>`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 24px;

    ${props => props.isScanning && css` 
        background-color: rgba(0, 0, 0, 0.5);
    `};
`

export const Title = styled.Text`
    margin: 15px 0;
    font-size: 22px;
    font-weight: bold;
    color: ${props => props.theme.colors.title};
`

export const DeviceButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
`

export const DeviceText = styled.Text`
    margin-left: 10px;
    font-size: 22px;
    width: 80%;
    color: ${props => props.theme.colors.inputText};
`
export const ConnectionDetails = styled.View`
    margin: 10px 0;
    padding: 5px;
`
export const StrongDetailText = styled.Text`
    font-weight: bold;
    margin-top: 10px;
`