import React from 'react';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButtons';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';
import { Colors } from '../constants/Colors';
import { View,Text,StyleSheet } from 'react-native';
// import Filters from './Filters';
const Favorites = props =>{
  const favMeals=useSelector(state=>state.meals.favoriteMeals);
  if(favMeals.length===0 || !favMeals){
    return(
      <View style={styles.content}>
        <Text>NO FAVORITE MEALS AVAILABLE .ADD SOME</Text>
      </View>
    );
  }
  

  return(
    <MealList listData={favMeals} navigation={props.navigation}/>
  );
};

Favorites.navigationOptions=(navData) => {
  
  return{
  headerTitle:'Your Favorites!',
  headerStyle:{
    backgroundColor:'#ff6f00'
  },
  headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title = 'Menu' iconName='ios-menu' onPress ={()=>{
            navData.navigation.toggleDrawer();
            // console.log('jash')
            }}/>
      </HeaderButtons>)
}};


const styles=StyleSheet.create({
  content: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default Favorites;