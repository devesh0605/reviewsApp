import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import About from '../screens/about'
import Header from '../shared/header'


const screens = {
    About:{
        screen:About,
        navigationOptions:({navigation})=>{
            return {
            headerTitle:()=><Header navigation={navigation} title='About Game Zone'/>
        }
    },
} 
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{backgroundColor:'#eee',
    height:60}
    }
})

export default AboutStack