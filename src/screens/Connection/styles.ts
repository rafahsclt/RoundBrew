import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    padding: 10px 20px 0;
    background: ${props => props.theme.colors.background};
`

export const Title = styled.Text`
    color: ${props => props.theme.colors.title};
    font-size: 30px;
    margin-bottom: 16px;
    margin-top: 48px;
    font-weight: bold;
`

export const Description = styled.Text`
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 30px;
`