import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    padding: 10px 20px 0;
    background: ${props => props.theme.colors.background};
`

export const Title = styled.Text`
    font-size: 24px;
    color: ${props => props.theme.colors.title};
    font-weight: bold;
    margin-top: 15px;
`

export const UniqueInput = styled.TextInput`
    
`