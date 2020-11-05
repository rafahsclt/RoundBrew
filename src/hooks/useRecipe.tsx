import React, { createContext, useContext, useState } from 'react'

interface IRecipeContext {
    
}

const RecipeContext = createContext<IRecipeContext>({} as IRecipeContext)

const RecipeProvider: React.FC = ({ children }) => {
    

    return (
        <RecipeContext.Provider value={{  }}>
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