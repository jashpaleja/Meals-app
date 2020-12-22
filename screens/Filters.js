import React, { useCallback, useEffect, useState } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Switch } from 'react-native-paper';
import Colors from '../constants/Colors';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButtons'
import {useDispatch} from 'react-redux';
import {setfilters} from '../store/actions/meals'
const FilterSwitch = props=>{
  return(<View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch 
        thumbColor={Colors.primaryColor}
        trackColor={{true:Colors.primaryColor}}
        value={props.state} 
        onValueChange={props.onChange}/>
      </View>);
}

const Filters = props =>{
  const {navigation}=props;
  const [isGlutenFree,setIsGlutenFree]= useState(false);
  const [isLactoseFree,setIsLactoseFree]=useState(false);
  const [isVegan,setIsVegan]=useState(false);
  const [isVegetarian,setIsVegetarian]=useState(false);
const dispatch = useDispatch();
  const saveFilters=useCallback(()=>{
    const appliedFilters={
    glutenFree:isGlutenFree,
    lactoseFree:isLactoseFree,
    vegan:isVegan,
    vegetarian:isVegetarian
  };
  dispatch(setfilters(appliedFilters));
  },[isVegetarian,isGlutenFree,isLactoseFree,isVegan,dispatch]
  );
  
  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return(
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch label='Gluten-free' 
      state={isGlutenFree} 
      onChange={newValue=>setIsGlutenFree(newValue)}/>
      <FilterSwitch label='Lactos-free' state={isLactoseFree} onChange={newValue=>setIsLactoseFree(newValue)}/>
      <FilterSwitch label='Vegan' state={isVegan} onChange={newValue=>setIsVegan(newValue)}/>
      <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={newValue=>setIsVegetarian(newValue)}/>
    </View>
  );
};

Filters.navigationOptions=(navData) => {
  return{
  headerTitle:'Filter Meals',
  headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title = 'Menu' iconName='ios-menu' onPress ={()=>{
            navData.navigation.toggleDrawer();
            }}/>
      </HeaderButtons>),
      headerRight:(<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title = 'Save' iconName='ios-save' onPress ={navData.navigation.getParam('save')}/>
    </HeaderButtons>)
}};

const styles=StyleSheet.create({
  screen:{
    flex:1,
    alignItems:'center'
  },
  title:{
    fontFamily:'open-sans-bold',
    fontSize:20,
    marginTop:10,
    textAlign:'center'
  },
  filterContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'80%',
    marginVertical:12
}
});

export default Filters;