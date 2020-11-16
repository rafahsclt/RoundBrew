import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from '@react-native-firebase/app'

import Connection from '../screens/Connection'
import Bluetooth from '../screens/Bluetooth'
import Recipe from '../screens/Recipe'
import RecipeDetails from '../screens/RecipeDetails'

import firebaseConfig from '../config/firebaseConfig'

const AppStack = createStackNavigator()

const Routes: React.FC = () => {

    useEffect(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }, [])

    return (
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <AppStack.Screen name="Recipe" component={Recipe} />
                <AppStack.Screen name="Connection" component={Connection} />
                <AppStack.Screen name="Bluetooth" component={Bluetooth} />
                <AppStack.Screen name="RecipeDetails" component={RecipeDetails} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes