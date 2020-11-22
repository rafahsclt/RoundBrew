import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Connection from '../screens/Connection'
import Bluetooth from '../screens/Bluetooth'
import Recipe from '../screens/Recipe'
import RecipeDetails from '../screens/RecipeDetails'
import CreateRecipe from '../screens/CreateRecipe'

const AppStack = createStackNavigator()

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <AppStack.Screen name="Connection" component={Connection} />
                <AppStack.Screen name="Bluetooth" component={Bluetooth} />
                <AppStack.Screen name="Recipe" component={Recipe} />
                <AppStack.Screen name="RecipeDetails" component={RecipeDetails} />
                <AppStack.Screen name="CreateRecipe" component={CreateRecipe} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes