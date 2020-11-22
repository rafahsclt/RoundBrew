import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import firebase from '@react-native-firebase/app'

import firebaseConfig from '../config/firebaseConfig'
import IRecipe from '../_types/Recipe'
import { INRListOne, INRListTwo, INRListThree, INRListFour, INRListFive} from '../_types/NRList'

interface IRecipeContext {
    recipes: IRecipe[]
    setRecipes(recipes: IRecipe[]): void
    selectedRecipe: IRecipe
    clearSelectedRecipe(): void
    NRListOne: INRListOne
    setNRListOne(value: INRListOne): void
    NRListTwo: INRListTwo
    setNRListTwo(value: INRListTwo): void
    NRListThree: INRListThree
    setNRListThree(value: INRListThree): void
    NRListFour: INRListFour
    setNRListFour(value: INRListFour): void
    NRListFive: INRListFive
    setNRListFive(value: INRListFive): void
    mountRecipe(): IRecipe
}

const RecipeContext = createContext<IRecipeContext>({} as IRecipeContext)

const RecipeProvider: React.FC = ({ children }) => {
    const [recipes, setRecipes] = useState<IRecipe[]>([])
    const [selectedRecipe, setSelectedRecipe] = useState<IRecipe>({} as IRecipe)

    const [NRListOne, setNRListOne] = useState<INRListOne>({} as INRListOne)
    const [NRListTwo, setNRListTwo] = useState<INRListTwo>({} as INRListTwo)
    const [NRListThree, setNRListThree] = useState<INRListThree>({} as INRListThree)
    const [NRListFour, setNRListFour] = useState<INRListFour>({} as INRListFour)
    const [NRListFive, setNRListFive] = useState<INRListFive>({} as INRListFive)

    useEffect(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }, [])

    const mountRecipe = useCallback(() => {
        const newRecipe: IRecipe = {
            beerName: NRListOne.beerName,
            yeast: NRListOne.yeast,
            boilTime: Number(NRListOne.boilTime),
            brewTime: Number(NRListOne.brewTime),
            maturationTime: Number(NRListOne.maturationTime),
            malts: NRListTwo,
            hops: NRListThree,
            ramps: NRListFour,
            hopsTime: NRListFive
        }

        return newRecipe
    }, [])

    const clearSelectedRecipe = useCallback(() => {
        setNRListOne({} as INRListOne)
        setNRListTwo({} as INRListTwo)
        setNRListThree({} as INRListThree)
        setNRListFour({} as INRListFour)
        setNRListFive({} as INRListFive)

        setSelectedRecipe({} as IRecipe)
    }, [setNRListOne, setNRListTwo, setNRListThree, setNRListFour, setNRListFive, setSelectedRecipe])

    return (
        <RecipeContext.Provider 
            value={{ recipes, setRecipes, selectedRecipe, clearSelectedRecipe,
                NRListOne, setNRListOne, NRListTwo, setNRListTwo, NRListThree,
                setNRListThree, NRListFour, setNRListFour, NRListFive, 
                setNRListFive, mountRecipe
            }}>
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