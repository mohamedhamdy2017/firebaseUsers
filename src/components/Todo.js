import React, { Component } from 'react';
import { Text, Picker, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { CardSection } from './common';
import { userUpdate } from '../actions';


class Todo extends Component {

    render(){
        return(

        <Container >
        <Content>
            <Form style={{ flexDirection:'row'}}>
            <Item style={{flex: 1}} floatingLabel>
                <Label style={{color: '#3f5151'}}>First Name</Label>
                <Input
                    value={this.props.firstName}
                    onChangeText={value => this.props.userUpdate({prop: 'firstName', value})}
                />
            </Item>

            <Item style={{flex: 1}} floatingLabel>
                <Label style={{color: '#3f5151'}}>last Name</Label>
                <Input
                    value={this.props.lastName}
                    onChangeText={value => this.props.userUpdate({prop: 'lastName', value})}
                />
            </Item>
            </Form>

            <Form>  
            <Item style={{flex: 1}} floatingLabel>
                <Label style={{color: '#3f5151'}}>Phone</Label>
                <Input
                    value={this.props.phoneNum}
                    onChangeText={value => this.props.userUpdate({prop: 'phoneNum', value})}
                />
            </Item>
            </Form>

            <Form>
            <Item  floatingLabel>
                <Label style={{color: '#3f5151'}}>Email</Label>
                <Input
                    value={this.props.email}
                    onChangeText={value => this.props.userUpdate({prop: 'email', value})}
                />
            </Item>


            <CardSection style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 17, margin:11, paddingRight: 140, color: '#3f5151'}}>Gender</Text>
                <Picker
                    style={{flex: 1}}
                    selectedValue={this.props.gender}
                    onValueChange= {value => this.props.userUpdate({prop: 'gender', value})}
                >
                    <Picker.Item label="Male" value="Male"/>
                    <Picker.Item label="Female" value="Female"/>
                </Picker>
            </CardSection>



    </Form>
</Content>
</Container>

    )
}
}

const mapStateToProps = (state) => {
    const { firstName, lastName, phoneNum, email, gender } = state.todos

    return { firstName, lastName, phoneNum, email, gender };
}
export default connect (mapStateToProps, {userUpdate}) (Todo);