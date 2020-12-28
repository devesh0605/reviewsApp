import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font'
import Home from './screens/home';
import {AppLoading} from 'expo-app-loading'
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';
import Navigator from './routes/homestack'
const getFonts = () =>Font.loadAsync({
    'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
  })

export default function App() {
  return(
  
    <Navigator/>
    
    

  )
 
 
}

