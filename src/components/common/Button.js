import React from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';

const Button = ({onPress,children}) =>{
    const {buttonStyles,buttonText} = styles
    return(
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
        <Text style={buttonText}> {children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyles:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5
    },
    buttonText:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    }
});

export  {Button};