import 'react-native-gesture-handler';

import React from 'react'
import { View, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import Routes from './routes'
import maltum from './themes/maltum';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={maltum}>
      <StatusBar barStyle="light-content" translucent={true} />
      <Routes /> 
    </ThemeProvider>
  )
}

export default App