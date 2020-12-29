import React from 'react'
import {StyleSheet,View,Text, Button, Image} from 'react-native'
import Card from '../shared/card';
import { globalStyles,images } from '../styles/global';

export default function ReviewDetails({navigation}){


    const pressHandler = () =>{
        navigation.goBack()
    }
    const rating = navigation.getParam('rating');

    return(
        <View style={globalStyles.container}>
            <Card>
            <Text>
                {navigation.getParam('title')}
            </Text>
            <Text>
                {navigation.getParam('body')}
            </Text>
            <View style={styles.rating}>
                <Text>GameZone rating:</Text>
                <Image source={images.ratings[rating]}/>
            </View>
            </Card>
            {/* <Button title='back home'
            onPress={pressHandler}/> */}
        </View>
    )

}
const styles = StyleSheet.create({
    rating: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 16,
      marginTop: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee',
    }
  });
