import React from 'react';
import {Text ,View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = (props) =>{

    return(
    <View style={style.viewStyle}>
       <Text style={style.textStyle}>{props.HeaderText}</Text>
       
    </View>
        );
};

const style = {
    viewStyle:{
        backgroundColor:'#E8F8D8',
        justifyContent:'center',
        alignItems: 'center',
        height:60,
        paddingTop: 15,
        shadowColor:'#000',
        shadowOffset: {width:0,height:2},
        shadowOpacity:0.9
    },
    textStyle:{
        fontSize:20
        
    }
}


export {Header};
