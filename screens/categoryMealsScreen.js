import React,{useLayoutEffect} from "react";
import {View, Text, StyleSheet,FlatList} from 'react-native'
import { MEALS ,CATEGORIES} from "../data/data";
import MealItem from "../components/mealItem";
/* import { useRoute } from "@react-navigation/native"; */

const CategoryMealsScreen=({navigation, route})=>{
    /* const route=useRoute(); */
    const catId= route.params.categoryId;
    const displayedMeals=MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId)>=0;
    })

    //这个跟传统的useEffect不同的是，他执行before整个component finish render
    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: categoryTitle,
        });
    },[catId,navigation])

    const renderMealItem=(itemData)=>{
        const mealItemProps={
            id:itemData.item.id,
            title:itemData.item.title,
            imageUrl:itemData.item.imageUrl,
            duration:itemData.item.duration,
            complexity:itemData.item.complexity,
            affordability:itemData.item.affordability,
        }
        return <MealItem 
                    {...mealItemProps}
                />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item)=>item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default CategoryMealsScreen;
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    }
})
