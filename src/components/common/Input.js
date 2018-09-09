import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, onValueChange, onChangeText, placeholder,secureTextEntry}) =>{
    const {inputStyle, labelStyle, containerStyle} = styles;
    
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>
              {label}
            </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value}
                onValueChange={onValueChange}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    );
};

const styles={
    inputStyle:{
        lineHeight: 23,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 20,
        flex:2
    },
    labelStyle:{
        fontSize: 18,
        flex:1,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop:10,
        paddingBottom:10
         

    },
    containerStyle:{
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center'
    }
}


export {Input};