import 'react-native-gesture-handler';

import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { BluetoothProvider } from './hooks/useBluetooth'
import { RecipeProvider } from './hooks/useRecipe'

import Routes from './routes'
import maltum from './themes/maltum';

const App: React.FC = () => {
  return (
    <BluetoothProvider>
      <RecipeProvider>
      <ThemeProvider theme={maltum}>
        <StatusBar barStyle="light-content" translucent={true} />
        <Routes />
      </ThemeProvider>
      </RecipeProvider>
    </BluetoothProvider>
  )
}

export default App