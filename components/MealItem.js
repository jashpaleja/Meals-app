import React from 'react';
import {View,ImageBackground,Text,StyleSheet,Button,TouchableOpacity, TouchableOpacityBase} from 'react-native';

const MealItem = props =>{
return(
  <View style={styles.mealItem}>
  <TouchableOpacity onPress={props.onSelectMeal}>
    <View></View>
    <View style={{...styles.mealRow,...styles.mealHeader}}>
      <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
      <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
      </ImageBackground>
    </View>
    <View style={{...styles.mealRow,...styles.mealDetail}}>
      <Text>{props.duration}m</Text>
      <Text>{props.complexity.toUpperCase()}</Text>
      <Text>{props.affordability.toUpperCase()}</Text>
      
    </View>
  </TouchableOpacity>
  </View>
);
};

const styles = StyleSheet.create({
  mealItem:{
    height:200,
    width:'97%',
    backgroundColor:'#D3D3D3',
    padding:3,
    margin:5,
    borderRadius:15,
    overflow:'hidden'
    },
    bgImage:{
      width:'100%',
      height:'100%',
      justifyContent:'flex-end',
    },

  mealRow:{
    flexDirection:'row',

  },
  title:{
    fontFamily:'open-sans-bold',
    fontSize:18,
    color:'white',
    backgroundColor:'rgba(0,0,0,0.5)',
    paddingVertical:5,
    paddingVertical:10 ,
    textAlign:'center'
  },
  mealHeader:{
    height:'85%',
  },
  mealDetail:{
    paddingHorizontal:10,
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:5

  }

});

export default MealItem; 