import React,{useLayoutEffect} from "react";
import { MEALS ,CATEGORIES} from "../data/data";
import RenderAListOfMeals from "../components/renderAListOfMeals";
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

    return (<RenderAListOfMeals items={displayedMeals}/>)
}

export default CategoryMealsScreen;
