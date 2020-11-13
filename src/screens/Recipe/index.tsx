import React, { useState, useEffect, useContext } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { ThemeContext } from 'styled-components/native'
import { BleManager } from 'react-native-ble-plx'
import database from '@react-native-firebase/database';

import Header from '../../components/Header'
import Button from '../../components/Button'
import { Container, Loading, Content, KeyText, ValueText, RecipeDetail, DetailText } from './styles'

import IRecipe from '../../_types/Recipe'

const Recipe: React.FC = () => {
    const [recipes, setRecipes] = useState<IRecipe[]>([])
    const [searching, setSearching] = useState(true)

    const { colors } = useContext(ThemeContext)

    useEffect(() => {
        async function searchOnFirebase() {
            const reference = await database().ref('recipes').once('value')

            const recipesArray: IRecipe[] = []

            reference.forEach((ref: IRecipe) => {
                recipesArray.push(ref)
            }) 

            setRecipes(recipesArray)
        }

        searchOnFirebase()

        setSearching(false)
    }, [])

    return (
        <Container>
            <Header title="Receitas" iconName="arrow-left" />
            <Button
                onPress={() => {}}
            >Nova Receita</Button>
            
            {searching ? (
                <Loading>
                    <ActivityIndicator 
                        size={80}
                        color={colors.primary}
                        style={{ marginBottom: 20 }}
                    />
                </Loading>
            ) : (
                <FlatList 
                    data={recipes}
                    keyExtractor={recipe => recipe.beerName}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: recipe }) => (
                        <Content>
                            <ValueText><KeyText>Nome : </KeyText>{recipe.beerName}</ValueText>
                            <ValueText><KeyText>Fermento : </KeyText>{recipe.yeast}</ValueText>
                            <ValueText><KeyText>Quantidade de Rampas : </KeyText>{recipe.ramps.quantityRamps}</ValueText>
                            <RecipeDetail>
                                <DetailText>Ver mais detalhes</DetailText>
                                <Icon name="arrow-right" size={14} color={colors.primary} />
                            </RecipeDetail>
                        </Content>
                    )}
                />
            )}
        </Container>
    )
}

export default Recipe