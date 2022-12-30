import React from "react";
import {StyleSheet,FlatList} from 'react-native'
import CategoryGridTile from '../components/categoryGridTile';
import {CATEGORIES} from '../data/data'

const CategoriesScreen=({navigation})=>{

    const renderCategoryItem=(itemData)=>{
        const pressHandler=()=>{
            navigation.navigate('MealOverview',{
                categoryId: itemData.item.id
            })
        }
        return <CategoryGridTile 
                    title={itemData.item.title} 
                    color={itemData.item.color}
                    onPress={pressHandler}
                />
    }

    return (
        <FlatList 
            data={CATEGORIES} 
            key={'#'}
            keyExtractor={item => "#" + item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}
export default CategoriesScreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
