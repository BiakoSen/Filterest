import React from 'react'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './views/main/Main'

const Stack = createStackNavigator()

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='Main' component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App