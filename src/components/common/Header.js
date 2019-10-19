import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header = (props) =>{
    const {viewHeaderStyle,titleStyle} = styles; 
    const {title} = props; 
 return (
 <View style = {viewHeaderStyle}>
 <Text style = {titleStyle}> {title}</Text>
 </View>
 );

};
const styles = StyleSheet.create({
viewHeaderStyle:{
    backgroundColor : '#F8F8F8',
    justifyContent:'center',
    alignItems:'center',
    height:80,
    paddingTop:25, 
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.2, 
    elevation:2,
    position:'relative'
},
titleStyle:{
    fontSize : 20
}
});
export {Header};