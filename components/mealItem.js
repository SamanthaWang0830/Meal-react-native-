import React from "react";
import { useNavigation } from "@react-navigation/native";
import {View, Text, StyleSheet,Pressable,Image,Platform} from 'react-native'

const MealItem=({id,title,imageUrl,duration,complexity,affordability})=>{
    const navigation=useNavigation();
    const selectMealHandler=()=>{
        navigation.navigate('MealDetail', {
            mealId:id
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable 
                android_ripple={{color:'#ccc'}} 
                style={({pressed})=>(pressed? styles.buttonPressed:null)}
                onPress={selectMealHandler}
            >
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{uri:imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsItem}>{duration}m</Text>
                    <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
                </View>
            </View>
            </Pressable>
        </View>
    )
}
export default MealItem;

const styles=StyleSheet.create({
    mealItem:{
        margin:20,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{window:0,height:2},
        shadowRadius:8,
        overflow: Platform.OS==='android'?'hidden':'visible',
    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden',
    },
    buttonPressed:{
        opacity:0.5
    },
    image:{
        width:'100%',
        height:200
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:8,
    },
    detailsItem:{
        marginHorizontal:4,
        fontSize:12,
    }
})