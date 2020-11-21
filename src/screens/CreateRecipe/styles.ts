import styled from 'styled-components/native'
import Slider from '@react-native-community/slider'

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

export const DoubleContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const SliderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
`

export const StyledSlider = styled(Slider)`
    height: 40px;
    width: 90%;
`

export const SliderText = styled.Text`
    color: ${props => props.theme.colors.primary};
    font-size: 40px;
    padding-right: 10px;
`