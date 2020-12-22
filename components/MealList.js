import React from 'react';
import {StyleSheet,View,FlatList} from 'react-native';
import MealItem from './MealItem';
import {useSelector} from 'react-redux';
import { State } from 'react-native-gesture-handler';
const MealList = props =>{ const favoriteMeals=useSelector(state=>state.meals.favoriteMeals);
  const renderMealItem = itemData =>{
   const isFavorite = favoriteMeals.find(meal=>meal.id===itemData.item.id);
    return(
     <MealItem title={itemData.item.title} 
     duration={itemData.item.duration}
     image={itemData.item.imageUrl}
     complexity={itemData.item.complexity}
     affordability={itemData.item.affordability}
     onSelectMeal={()=>{props.navigation.navigate({routeName:'MealDetail',params:{
       mealId:itemData.item.id,
       mealTitle:itemData.item.title,

     }})}}/>
    ); 
  }
return (<View style={styles.screen}>
  <FlatList data={props.listData} keyExtractor={(item,index)=>{item.id}} renderItem={renderMealItem}
  style={{width:'100%'}}/>
</View>);

}

const styles=StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default MealList;