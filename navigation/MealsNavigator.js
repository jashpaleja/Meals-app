import React from 'react';
import {Platform} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import {Ionicons} from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../constants/Colors'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import Favorites from '../screens/Favorites';
import MealDetailScreen from '../screens/MealDetailScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Filters from '../screens/Filters'
const MealsNavigator = createStackNavigator({
  Categories:{
    screen:CategoriesScreen},
  CategoryMeals:{
    screen:CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen 
},{
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:Colors.primaryColor
    },
    headerTintColor:'white'
  }
})

const FavNavigator=createStackNavigator({
  Favorites:Favorites,
  MealDetail:MealDetailScreen
},{
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:Colors.primaryColor
    },
    headerTintColor:'white'
  }
})

const tabScreenConfig = {Meals:{screen:MealsNavigator,navigationOptions:{
  tabBarIcon:(tabInfo)=>{
    return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor }/>  
  }
}},
Favorites:{screen:FavNavigator,navigationOptions:{
  tabBarIcon:(tabInfo)=>{
    return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor }/>  
  },tabBarColor:Colors.accentColor   
}
}};

const MealFavTabNav= Platform.OS === 'android' ? createMaterialBottomTabNavigator(
  tabScreenConfig,{
  shifting:true}
): createBottomTabNavigator(
  tabScreenConfig, 
  {
  tabBarOptions:{
    activeTintColor:Colors.accentColor
  }
});

const FiltersNavigator = createStackNavigator({
  Filters:Filters
},{
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:Colors.primaryColor
    },
    headerTintColor:'white'
  }
});


const mainNav = createDrawerNavigator({
  MealsFav:{screen:MealFavTabNav,navigationOptions:{
    drawerLabel:"Meals"
  }},
  Filters:FiltersNavigator
},{
  contentOptions:{
    activeTintColor:Colors.accentColor,
    labelStyle:{
      fontFamily:'open-sans'
    }
  }
});

export default createAppContainer(mainNav);

