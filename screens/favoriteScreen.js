import React from "react";
import { StyleSheet,View, Text} from 'react-native'
import RenderAListOfMeals from "../components/renderAListOfMeals";
//import { FavoritesContext } from "../store/context/favorite-context";
import { MEALS } from "../data/data";
import { useSelector} from "react-redux";

const FavoriteScreen=()=>{
    //const {ids}= useContext(FavoritesContext)
    const favoriteMealIds= useSelector((state)=>state.favoriteMeals.ids)
    const favoriteMeals=MEALS.filter((meal)=>favoriteMealIds.includes(meal.id))

    if(favoriteMeals.length==0){
        return(
        <View style={styles.container}>
            <Text style={styles.text}>You have no favorite meal yet</Text>
        </View>
        )
    }
    return (
        <RenderAListOfMeals items={favoriteMeals}/>
    )
}

export default  FavoriteScreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})
