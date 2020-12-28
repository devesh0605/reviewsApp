import React from 'react'
import {StyleSheet,View,Text, Button} from 'react-native'
import { globalStyles } from '../styles/global';

export default function Home({navigation}){

    const pressHandler = () =>{
        navigation.navigate('ReviewDetails')
        //navigation.pop('ReviewDetails')
    }

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                Home Screen Split
            </Text>
            <Button title='go to dets'
            onPress={pressHandler}/>
        </View>
    )

}


  