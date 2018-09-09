import React, {Component} from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import { withNavigation } from 'react-navigation';


class ListItem extends Component {
    render(){
        const { firstName, lastName } = this.props.user;
        
    return(
        <TouchableWithoutFeedback 
            onPress = {() => this.props.navigation.navigate('editTodo', this.props.user)}
            >
            <View>  
                <CardSection >
                    <Text style={{fontSize: 20, padding: 12}} >{firstName} {lastName}</Text>
                </CardSection>
            </View>
        </TouchableWithoutFeedback> 
    )
} 
}
export default withNavigation (ListItem);     