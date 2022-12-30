import React,{useLayoutEffect} from "react";
import {View, Text,StyleSheet,Image,ScrollView, Button} from 'react-native'
import { MEALS } from "../data/data";
import MealDetailList from "../components/mealDetailList";
import IconButton from "../components/iconButton";

const MealDetailScreen=({route,navigation})=>{
    const mealId= route.params.mealId;
    //把被点击的meal呈现出来，根据id
    const selectedMeal=MEALS.find((meal)=>meal.id==mealId)
    
    const headerButtonPresshandler=()=>{
        console.log('hi');
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return (
                <IconButton 
                    onPress={headerButtonPresshandler} 
                    icon='star' 
                    color='white'
                />
                )
              }
        });
    },[navigation, headerButtonPresshandler])


    return (
        <ScrollView style={styles.screen}>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}></Image>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <View style={styles.details}>
                    <Text style={styles.detailsItem}>{selectedMeal.duration}m</Text>
                    <Text style={styles.detailsItem}>{selectedMeal.complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsItem}>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Ingredients</Text>
                    </View>
                    <MealDetailList data={selectedMeal.ingredients}/>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Steps</Text>
                    </View>
                    <MealDetailList data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    )
}
export default MealDetailScreen;
const styles=StyleSheet.create({
    screen:{
        marginBottom:32,
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
        color:'white',
    },
    image:{
        width:'100%',
        height:350,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        margin:8,
        textAlign:'center',
        color:'white',
    },
    subtitle:{
        color:'#e2b497',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
    },
    subtitleContainer:{
        padding:6,
        marginHorizontal:12,
        marginVertical:4,
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
    },
    listOuterContainer:{
        alignItems:"center",
    },
    listContainer:{
        width:'80%',
    }
})
