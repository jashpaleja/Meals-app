import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import CategoryGrid from '../components/CategoryGrid'
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButtons'
const CategoriesScreen = props =>{
  const renderGridItem=(itemData)=>{
    return <CategoryGrid title={itemData.item.title} color={itemData.item.color} onSelect={()=>{props.navigation.navigate({routeName:'CategoryMeals',params:{
      categoryId:itemData.item.id }})}} />
    };
  return(
    <FlatList keyExtractor={(item,index)=>item.id} 
    data={CATEGORIES} 
    renderItem={renderGridItem}  
    numColumns={2}/>
  );
};

CategoriesScreen.navigationOptions=(navData) => {
  return{
  headerTitle:'Categories',
  headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title = 'Menu' iconName='ios-menu' onPress ={()=>{
            navData.navigation.toggleDrawer();
            // console.log('jash')
            }}/>
      </HeaderButtons>)
}};


export default CategoriesScreen;