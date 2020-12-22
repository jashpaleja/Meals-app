import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import {useSelector} from 'react-redux'
import {CATEGORIES} from '../data/dummy-data'; 
import MealList from '../components/MealList';
import { Text,View,StyleSheet } from 'react-native';
const CategoryMealsScreen = props =>{
  const catId=props.navigation.getParam('categoryId');
 
  const availableMeals =useSelector(state=>state.meals.filteredMeals);
    
 

  const displayedMeals = availableMeals.filter(meal=>meal.categoryIds.indexOf(catId)>=0);
  if(displayedMeals.length === 0){
    return (<View style={styles.todu}>
      <Text>no required meals</Text>
    </View>);  }
  return(
    <MealList listData={displayedMeals} navigation={props.navigation}/>
  );
};

CategoryMealsScreen.navigationOptions= navigationData =>{
const catId=navigationData.navigation.getParam('categoryId');
const selectedCategory = CATEGORIES.find(cat=>cat.id===catId);
return{
 headerTitle:selectedCategory.title};
};

const styles= StyleSheet.create({
  todu:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default CategoryMealsScreen;