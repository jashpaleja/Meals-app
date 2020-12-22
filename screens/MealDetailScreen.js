import React,{useEffect,useCallback} from 'react';
import {View,Text,StyleSheet,ScrollView,Image} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButtons';
import { toggleFavorite } from "../store/actions/meals";
const MealDetailScreen = props =>{
  const availableMeals=useSelector(state=>state.meals.meals);
  const mealId = props.navigation.getParam('mealId'); 
  const selectedMeal = availableMeals.find(meal=>meal.id === mealId);
  const currentMealIsFavorite = useSelector(
    state=>state.meals.favoriteMeals.some(meal=>meal.id===mealId)
  );
 const dispatch = useDispatch();

 const toggleFavoriteHandler = useCallback(() =>{
   dispatch(toggleFavorite(mealId));
 },[dispatch, mealId]);
 
useEffect(()=>{
  // props.navigation.setParams({mealTitle:selectedMeal.title});
  props.navigation.setParams({toggleFav:toggleFavoriteHandler});
},[selectedMeal]);

useEffect(
  ()=>{props.navigation.setParams({
    isFav:currentMealIsFavorite
  });},[currentMealIsFavorite]
);

  return(
    <ScrollView>
    <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
    <View style={styles.details}>
      <Text>{selectedMeal.duration}m</Text>
      <Text>{selectedMeal.complexity.toUpperCase()}</Text>
      <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingrediants</Text>
      
      {selectedMeal.ingrediants.map(ingrediant=><View style={styles.list}><Text>{ingrediant}</Text></View>)}
      <Text style={styles.title}>Steps</Text>
      
      {selectedMeal.steps.map(step=><View style={styles.list}><Text>{step}</Text></View>)}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) =>{
  // const mealId = navigationData.navigation.getParam('mealId');
  const toggleFavorite=navigationData.navigation.getParam('toggleFav');
  const mealTitle=navigationData.navigation.getParam('mealTitle');
  const isFavorite=navigationData.navigation.getParam('isFav')
  return {
    headerTitle:mealTitle,
    headerRight:(
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='Favorite' iconName={isFavorite ? 'ios-star': 'ios-star-outline'} onPress={toggleFavorite}/>
    </HeaderButtons>
    )};
};

const styles=StyleSheet.create({
  image:{
    width:'100%',
    height:200
  }, 
  details:{
    flexDirection:'row',
    padding:15,
    justifyContent:'space-around'
  },
  title:{
    fontFamily:'open-sans-bold',
    fontSize:16,
    textAlign:'center'
  },
  list:{
    marginLeft:20,
    marginTop:6,
    padding:10,
    marginHorizontal:20,
    borderColor:'black',
    borderWidth:1,
    borderRadius:20
  }

});

export default MealDetailScreen;