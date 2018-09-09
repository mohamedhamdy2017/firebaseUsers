import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Todo from './Todo';
import { Button, CardSection } from './common';
import { connect } from 'react-redux';
import { createUser } from '../actions';


class AddTodo extends Component {
    
    onButtonPress(){
        const { firstName, lastName, phoneNum, email, gender, navigation } = this.props;

        this.props.createUser({ firstName, lastName, phoneNum, email, gender: gender || 'Male' , navigation});
    }

    render(){
        return(
            <View style={{flex: 1}}> 
                    <Todo {...this.props} />            
                        
                    
                    <CardSection> 
                    <Button style={styles.btnStyle} 
                    onPress={this.onButtonPress.bind(this)}
                    >
                        <Text>Create</Text>
                    </Button>
                    </CardSection>
            </View>
        );
    }
}

const styles = {
    btnStyle: {
        borderRadius: 30,
        width: 200,
        
    }
}

const mapStateToProps = (state) => {
    const { firstName, lastName, phoneNum, email, gender } = state.todos

    return { firstName, lastName, phoneNum, email, gender };
}

export default connect(mapStateToProps, {createUser}) (AddTodo);