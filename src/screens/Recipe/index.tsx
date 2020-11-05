import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BleManager } from 'react-native-ble-plx'
import database from '@react-native-firebase/database';



const Recipe: React.FC = () => {

    async function showDetails() {
        const reference = await database().ref('recipes').once('value')
        console.log(reference)
    }

    return (
        <View>
            <TouchableOpacity onPress={showDetails}>
                <Text style={{ color: '#fff', fontSize: 40}}>testeee</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Recipe