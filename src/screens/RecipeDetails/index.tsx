import React from 'react'

import { useRecipe } from '../../hooks/useRecipe'
import { Container } from './styles'

const RecipeDetails: React.FC = () => {
    const { recipes } = useRecipe()
    return (
        <Container>

        </Container>
    )
}

export default RecipeDetails