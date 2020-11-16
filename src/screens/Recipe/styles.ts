import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    padding: 20px 24px 0;
    background: ${props => props.theme.colors.background};
`
export const Loading = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Content = styled.View`
    padding: 10px;
    border: 1px solid;
    border-radius: 8px;
    margin-bottom: 30px;
`

export const KeyText = styled.Text`
    font-weight: bold;
`

export const ValueText = styled.Text`
    font-size: 14px;
    color: ${props => props.theme.colors.recipeText};
`

export const RecipeDetail = styled.TouchableOpacity`
    margin-top: 5px;
    border-style: solid;
    border-top-width: 1px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const DetailText = styled.Text`
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
`