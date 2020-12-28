import React from 'react'
import {StyleSheet,View,Text, Button} from 'react-native'
import { globalStyles } from '../styles/global';

export default function ReviewDetails({navigation}){


    const pressHandler = () =>{
        navigation.goBack()
    }

    return(
        <View style={globalStyles.container}>
            <Text>
                Review Details Screen
            </Text>
            <Button title='back home'
            onPress={pressHandler}/>
        </View>
    )

}

