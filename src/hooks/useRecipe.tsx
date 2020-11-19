import React, { createContext, useContext, useState } from 'react'

import IRecipe from '../_types/Recipe'

interface IRecipeContext {
    recipes: IRecipe[]
    setRecipes(recipes: IRecipe[]): void
    selectedRecipe: IRecipe
    setSelectedRecipe(recipe: IRecipe): void
}

const RecipeContext = createContext<IRecipeContext>({} as IRecipeContext)

const RecipeProvider: React.FC = ({ children }) => {
    const [recipes, setRecipes] = useState<IRecipe[]>([])
    const [selectedRecipe, setSelectedRecipe] = useState<IRecipe>({} as IRecipe)

    

    return (
        <RecipeContext.Provider value={{ recipes, setRecipes, selectedRecipe, setSelectedRecipe }}>
            {children}
        </RecipeContext.Provider>
    )
}

function useRecipe(): IRecipeContext {
    const context = useContext(RecipeContext)

    if(!context) {
        throw new Error('useRecipe must be used within RecipeProvider')
    }

    return context
}

export { RecipeContext, RecipeProvider, useRecipe }