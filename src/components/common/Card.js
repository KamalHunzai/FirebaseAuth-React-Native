import React from 'react';
import {View,StyleSheet} from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.container}>
        {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOffset:{widht:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:1,
        marginLeft:5,
        marginRight:5,
        marginTop:10
    }
});
export { Card };