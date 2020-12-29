import React from 'react'
import {StyleSheet,View,Text, Button} from 'react-native'
import Card from '../shared/card';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({navigation}){


    const pressHandler = () =>{
        navigation.goBack()
    }

    return(
        <View style={globalStyles.container}>
            <Card>
            <Text>
                {navigation.getParam('title')}
            </Text>
            <Text>
                {navigation.getParam('body')}
            </Text>
            <Text>
                {navigation.getParam('rating')}
            </Text>
            </Card>
            {/* <Button title='back home'
            onPress={pressHandler}/> */}
        </View>
    )

}

