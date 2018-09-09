import React, { Component } from 'react';
import{ View, Text, Picker, TouchableOpacity  } from 'react-native';
import { Container, Content, Form, Item, Label, Input } from 'native-base';
import Communications from 'react-native-communications';
import { CardSection, Button, Confirmation } from './common';
import { userUpdate, saveUser, deleteUser } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'
import { withNavigation } from 'react-navigation';
import firebase from 'firebase'



class EditTodo extends Component {
    state = {showModal: false};

    static navigationOptions = ({navigation}) => ({
        title: 'Profile Details',
        headerLeft:(
            <TouchableOpacity
                onPress = {() => navigation.navigate('TodoList')} 
            >
             <Icon 
                name="arrow-circle-left" 
                size = {25} 
                style= {{margin: 10}} />
            </TouchableOpacity>
        )
    })
 
    
    componentWillMount(){
        _.each(this.props.user, (value, prop) =>{
            this.props.userUpdate({ prop, value });
        });
    }

    onTextButtonPress(){
        const { phoneNum } = this.props;
        console.log(phoneNum)
        //Communications.text(phoneNum, `hello from my app`);   
    }

    onSavedPressed(){
       const { firstName, lastName, phoneNum, email, gender, uid , navigation} = this.props.navigation.state.params;
      // console.log(firstName, lastName, phoneNum, email, gender, uid )   
       this.props.saveUser({ firstName, lastName, phoneNum, email, gender, uid, navigation})
    }


    onDecline(){
        this.setState({ showModal: false})
      
    }

    onAccept(){
        // const { currentUser } = firebase.auth();
        // firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        // .remove().then(
        //     () => console.log(currentUser)
        // )
         const { uid  } = this.props.navigation.state.params;
         console.log(uid)
         this.props.deleteUsers(uid);
    }


    render() {
      //const detail = this.props.navigation.getParam('user','uid')
        return(
            <View style={{flex: 1}}>

                <Container >
                    <Content>
                        <Form style={{ flexDirection: 'row' }}>
                            <Item style={{ flex: 1 }} floatingLabel>
                                <Label style={{ color: '#3f5151' }}>First Name</Label>
                                <Input
                                    value ={this.props.navigation.state.params.firstName}
                                    onChangeText={value => this.props.userUpdate({prop: 'firstName', value})}
                                />
                            </Item>

                            <Item style={{ flex: 1 }} floatingLabel>
                                <Label style={{ color: '#3f5151' }}>last Name</Label>
                                <Input
                                    value={this.props.navigation.state.params.lastName}
                                    onChangeText={value => this.props.userUpdate({prop: 'lastName', value})}
                                    />
                            </Item>
                        </Form>

                        <Form>
                            <Item style={{ flex: 1 }} floatingLabel>
                                <Label style={{ color: '#3f5151' }}>Phone</Label>
                                <Input
                                    value={this.props.navigation.state.params.phoneNum}
                                    onChangeText={value => this.props.userUpdate({ prop: 'phoneNum', value })}
                                />
                            </Item>
                        </Form>

                        <Form>
                            <Item floatingLabel>
                                <Label style={{ color: '#3f5151' }}>Email</Label>
                                <Input
                                    value={this.props.navigation.state.params.email}
                                    onChangeText={value => this.props.userUpdate({ prop: 'email', value })}
                                />
                            </Item>


                            <CardSection style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 17, margin: 11, paddingRight: 140, color: '#3f5151' }}>Gender</Text>
                                <Picker
                                    style={{ flex: 1 }}
                                    selectedValue={this.props.navigation.state.params.gender}
                                    onValueChange={value => this.props.userUpdate({ prop: 'gender', value })}
                                >
                                    <Picker.Item label="Male" value="Male" />
                                    <Picker.Item label="Female" value="Female" />
                                </Picker>
                            </CardSection>



                        </Form>
                    </Content>
                </Container>


                <CardSection>
                    <Button
                        onPress={this.onSavedPressed.bind(this)}
                    >
                        Save
                    </Button>

                    <Button onPress={this.onTextButtonPress.bind(this)}>
                        Text
                    </Button>

                    <Button 
                        onPress={() => this.setState({ showModal: !this.state.showModal})}
                    >
                        Delete
                    </Button>

                    <Confirmation
                        visible = {this.state.showModal}
                        onAccept ={ this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                    >
                Are you sure you want to delete?
            </Confirmation>


                </CardSection>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { firstName, lastName, phoneNum, email, gender } = state.todos

    return { firstName, lastName, phoneNum, email, gender };
}



export default connect(mapStateToProps, {userUpdate,deleteUser, saveUser}) (EditTodo);