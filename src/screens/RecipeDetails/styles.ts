import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    padding: 20px 24px 0;
    background: ${props => props.theme.colors.background};
    justify-content: space-between;
`

export const Content = styled.View`
    flex: 1;
`

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
    margin-top: 5px;
`

export const KeyText = styled.Text`
    font-weight: bold;
`

export const ValueText = styled.Text`
    font-size: 14px;
    color: ${props => props.theme.colors.recipeText};
`