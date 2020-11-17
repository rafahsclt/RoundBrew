import React, { useState, useEffect, useContext, useCallback } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { ThemeContext } from 'styled-components/native'
import database from '@react-native-firebase/database';

import { useRecipe } from '../../hooks/useRecipe'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { Container, Loading, Content, KeyText, ValueText, RecipeDetail, DetailText } from './styles'

import IRecipe from '../../_types/Recipe'

const Recipe: React.FC = () => {
    const [searching, setSearching] = useState(true)
    const { recipes, setRecipes, setSelectedRecipe } = useRecipe()

    const { colors } = useContext(ThemeContext)
    const { navigate } = useNavigation()

    const viewRecipeDetails = useCallback((recipe) => {
        setSelectedRecipe(recipe)
        navigate('RecipeDetails')
    }, [])

    useEffect(() => {
        async function searchOnFirebase() {
            const data = (await database().ref('recipes').once('value')).toJSON()
            
            if(data) {
                const recipesArray: IRecipe[] = []
    
                Object.entries(data).forEach((ref) => {
                    recipesArray.push(ref[1])
                }) 

                console.log(recipesArray)
    
                setRecipes(recipesArray)
            }
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
                            <RecipeDetail
                                onPress={() => viewRecipeDetails(recipe)}
                            >
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