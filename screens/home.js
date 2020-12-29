import React, { useState } from 'react'
import {StyleSheet,View,Text, Button} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';

export default function Home({navigation}){

    const pressHandler = () =>{
        navigation.navigate('ReviewDetails')
        //navigation.pop('ReviewDetails')
    }

    const [reviews,setReviews]=useState([
        {title:'abc',rating:5,body:'lorem ipsum',key:'1'},
        {title:'pqr',rating:4,body:'lorem ipsum',key:'2'},
        {title:'xyz',rating:3,body:'lorem ipsum',key:'3'},
    ])

    return(
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>
                Home Screen Split
            </Text> */}
            {/* <Button title='go to dets'
            onPress={pressHandler}/> */}
            <FlatList
            data={reviews}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    )

}


  