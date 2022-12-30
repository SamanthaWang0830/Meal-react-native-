import React from "react";
import {View, Text,StyleSheet} from 'react-native'

const MealDetailList=({data})=>{
    return data.map(eachData=>(
        <View key={eachData} style={styles.listItem}>
            <Text style={styles.itemText}>{eachData}</Text>
        </View>
    ))
}
const styles=StyleSheet.create({
    listItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:'#e2b497',
    },
    itemText:{
        color:'#351401',
        textAlign:'center',
    }
})

export default MealDetailList;