import React from 'react'
import { View, ScrollView } from 'react-native'

import { useRecipe } from '../../hooks/useRecipe'
import { Container, Content, Title, KeyText, ValueText } from './styles'

import Header from '../../components/Header'
import Button from '../../components/Button'

const RecipeDetails: React.FC = () => {
    const { selectedRecipe } = useRecipe()
    return (
        <Container>
            <View>
                <Header
                    title="Detalhes"
                    iconName="arrow-left"
                />
                <ScrollView>

                    <Content>
                        <Title>{selectedRecipe.beerName}</Title>
                        <ValueText><KeyText>Fermento : </KeyText>{selectedRecipe.yeast}</ValueText>
                        <ValueText><KeyText>Tempo de Maturação : </KeyText>{selectedRecipe.maturationTime} dias</ValueText>
                        <ValueText><KeyText>Tempo de Fermentação : </KeyText>{selectedRecipe.brewTime} dias</ValueText>

                        <Title>Maltes</Title>
                        {selectedRecipe.malts.quantityMalts >= 1 && <ValueText><KeyText>Malte 1 : </KeyText>{selectedRecipe.malts.nameMaltOne} , {selectedRecipe.malts.weightMaltOne}g</ValueText>}
                        {selectedRecipe.malts.quantityMalts >= 2 && <ValueText><KeyText>Malte 2 : </KeyText>{selectedRecipe.malts.nameMaltTwo} , {selectedRecipe.malts.weightMaltTwo}g</ValueText>}
                        {selectedRecipe.malts.quantityMalts >= 3 && <ValueText><KeyText>Malte 3 : </KeyText>{selectedRecipe.malts.nameMaltThree} , {selectedRecipe.malts.weightMaltThree}g</ValueText>}
                        {selectedRecipe.malts.quantityMalts >= 4 && <ValueText><KeyText>Malte 4 : </KeyText>{selectedRecipe.malts.nameMaltFour} , {selectedRecipe.malts.weightMaltFour}g</ValueText>}
                        {selectedRecipe.malts.quantityMalts >= 5 && <ValueText><KeyText>Malte 5 : </KeyText>{selectedRecipe.malts.nameMaltFive} , {selectedRecipe.malts.weightMaltFive}g</ValueText>}

                        <Title>Lúpulos</Title>
                        {selectedRecipe.hops.quantityHops >= 1 && <ValueText><KeyText>Lúpulo 1 : </KeyText>{selectedRecipe.hops.nameHopOne} , {selectedRecipe.hops.weightHopOne}g</ValueText>}
                        {selectedRecipe.hops.quantityHops >= 2 && <ValueText><KeyText>Lúpulo 2 : </KeyText>{selectedRecipe.hops.nameHopTwo} , {selectedRecipe.hops.weightHopTwo}g</ValueText>}
                        {selectedRecipe.hops.quantityHops >= 3 && <ValueText><KeyText>Lúpulo 3 : </KeyText>{selectedRecipe.hops.nameHopThree} , {selectedRecipe.hops.weightHopThree}g</ValueText>}
                        {selectedRecipe.hops.quantityHops >= 4 && <ValueText><KeyText>Lúpulo 4 : </KeyText>{selectedRecipe.hops.nameHopFour} , {selectedRecipe.hops.weightHopFour}g</ValueText>}
                        {selectedRecipe.hops.quantityHops >= 5 && <ValueText><KeyText>Lúpulo 5 : </KeyText>{selectedRecipe.hops.nameHopFive} , {selectedRecipe.hops.weightHopFive}g</ValueText>}

                        <Title>Tempos das Rampas de Temp</Title>
                        {selectedRecipe.ramps.quantityRamps >= 1 && <ValueText><KeyText>Rampa 1 : </KeyText>{selectedRecipe.ramps.timeRampOne} minutos à {selectedRecipe.ramps.tempRampOne}ºC</ValueText>}
                        {selectedRecipe.ramps.quantityRamps >= 2 && <ValueText><KeyText>Rampa 2 : </KeyText>{selectedRecipe.ramps.timeRampTwo} minutos à {selectedRecipe.ramps.tempRampTwo}ºC</ValueText>}
                        {selectedRecipe.ramps.quantityRamps >= 3 && <ValueText><KeyText>Rampa 3 : </KeyText>{selectedRecipe.ramps.timeRampThree} minutos à {selectedRecipe.ramps.tempRampThree}ºC</ValueText>}
                        {selectedRecipe.ramps.quantityRamps >= 4 && <ValueText><KeyText>Rampa 4 : </KeyText>{selectedRecipe.ramps.timeRampFour} minutos à {selectedRecipe.ramps.tempRampFour}ºC</ValueText>}
                        {selectedRecipe.ramps.quantityRamps >= 5 && <ValueText><KeyText>Rampa 5 : </KeyText>{selectedRecipe.ramps.timeRampFive} minutos à {selectedRecipe.ramps.tempRampFive}ºC</ValueText>}

                        <Title>Tempos dos Lúpulos</Title>
                        {selectedRecipe.ramps.quantityRamps >= 1 && <ValueText><KeyText>Rampa 1 : </KeyText>{selectedRecipe.ramps.timeRampOne} minutos à {selectedRecipe.ramps.tempRampOne}ºC</ValueText>}
                        {selectedRecipe.ramps.quantityRamps >= 2 && <ValueText><KeyText>Rampa 2 : </KeyText>{selectedRecipe.ramps.timeRampTwo} minutos à {selectedRecipe.ramps.tempRampTwo}ºC</ValueText>}
                        {selectedRecipe.ramps.quantityRamps >= 3 && <ValueText><KeyText>Rampa 3 : </KeyText>{selectedRecipe.ramps.timeRampThree} minutos à {selectedRecipe.ramps.tempRampThree}ºC</ValueText>}
                        {selectedRecipe.ramps.quantityRamps >= 4 && <ValueText><KeyText>Rampa 4 : </KeyText>{selectedRecipe.ramps.timeRampFour} minutos à {selectedRecipe.ramps.tempRampFour}ºC</ValueText>}
                        {selectedRecipe.ramps.quantityRamps >= 5 && <ValueText><KeyText>Rampa 5 : </KeyText>{selectedRecipe.ramps.timeRampFive} minutos à {selectedRecipe.ramps.tempRampFive}ºC</ValueText>}
                    </Content>
                </ScrollView>
            </View>
            <Button>Fazer essa receita!</Button>
        </Container>
    )
}

export default RecipeDetails