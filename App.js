import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font'
import Home from './screens/home';
import {AppLoading} from 'expo-app-loading'

const getFonts = () =>Font.loadAsync({
    'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
  })

export default function App() {
  return(
    <Home/>
  )
 
 
}

