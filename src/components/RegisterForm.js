import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, registerUser } from '../actions';


class RegisterForm extends Component {

    onEmailChanged(text){
        this.props.emailChanged(text);
    }

    onPasswordChanged(text){
        this.props.passwordChanged(text);
    }

    onButtonClicked(){
        const { email, password, navigation } = this.props;
        this.props.registerUser({email, password, navigation });
    }

    renderButton(){
        if(this.props.loading){
            return(
                <Spinner size= "large"  />
            );
        }
        return(
            <Button onPress={this.onButtonClicked.bind(this)}>
                Sign Up
            </Button>
        );
    };

    renderError(){
        return(
        <View>
            <Text style={styles.errorTextStyle} >
                {this.props.error}
            </Text>
        </View>
        );
    };

    render(){
        return(
        <View style={{backgroundColor:'#DECBA4', height: null, flex: 1}}>
            <View style={{backgroundColor:'#DECBA4'}}>
                <View style={{paddingTop: 190}}>
                    <Card >
                        <CardSection style={{backgroundColor:'#DECBA4'}} >
                            <Input 
                                label = "Email"
                                placeholder = "user@email.com"
                                value ={this.props.email}
                                onChangeText={this.onEmailChanged.bind(this)}
                            />
                        </CardSection>

                        <CardSection>
                            <Input 
                                label = "Password"
                                placeholder = "******"
                                value ={this.props.password}
                                onChangeText={this.onPasswordChanged.bind(this)}
                            />
                        </CardSection>

                            {this.renderError()}
                        <CardSection>
                            {this.renderButton()}
                        </CardSection>
                    </Card>
                </View>

                <View style={styles.viewStyle}>
                        <Text style={styles.alTextStyle}>Already Have an account!!    </Text>
                    <TouchableOpacity  onPress={ ()=> this.props.navigation.navigate('wellcome')}>
                        <Text style={styles.sInTextStyle}>
                          Sign In
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
        );
    }
}

const mapStateToProps = ({auth}) => {
    const {email, password, error, loading } = auth;
    
    return{email, password, error, loading };
}

const styles={
    errorTextStyle:{
        fontSize: 18,
        color: 'red',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    viewStyle:{
        alignItems: 'flex-end',
        height: 180,
        justifyContent: 'center',
        flexDirection: 'row',
        
    },
    sInTextStyle:{
        fontSize: 25,
        color: "#3f5151"
    },
    alTextStyle:{
        fontSize: 18,
        color: "#000"
    }
}
export default connect (mapStateToProps, { emailChanged, passwordChanged, registerUser }) (RegisterForm);