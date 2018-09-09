import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { Card, CardSection, Input, Spinner, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux';


class WellcomePage extends Component {
  static navigationOptions ={
    header: null
  }

  onEmailChanged(text){
    this.props.emailChanged(text)
  }

  onPasswordChanged(text){
    this.props.passwordChanged(text)
  }

  onButtonPress(){
       const { email, password, navigation } = this.props;
       this.props.loginUser({ email, password, navigation })
  }

  renderButton(){
    if(this.props.loading){
      return (<Spinner size="large" />);
    }
    return(
      <Button onPress={this.onButtonPress.bind(this)}>
          Sign In
      </Button>
  );
  }

  renderError(){
    return (
      <Text style={styles.textErrorStyle}>
        {this.props.error}
      </Text>
    )
  }


  render() {
    return (
        
      <View style={styles.containerStyle}>
      <Image
        source={(require('../imgs/todo.jpg'))}
        style={{width: null, height:'100%', flex: 1}}
      />
        <View>
        <Card>
          <CardSection>
            <Input  
              label="Email"
              placeholder="Enter your Email"
              value = {this.props.email}
              onChangeText={this.onEmailChanged.bind(this)}
            />
          </CardSection>

          <CardSection>
            <Input 
              secureTextEntry
              label="Password"
              placeholder="Enter your Password"
              value ={this.props.password}
              onChangeText={this.onPasswordChanged.bind(this)}
              
            />
          </CardSection>

        </Card>
        </View>
          {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>

        <CardSection>
        <Button onPress={() => this.props.navigation.navigate('register')}>
          Sign Up
        </Button>
        </CardSection>
      </View>
    );
  }
}

const styles ={
    containerStyle:{
      flex:1,
      justifyContent: 'flex-end'
    },
    textErrorStyle:{
      fontSize: 20,
      color: 'red', 
      justifyContent: 'center',
      alignSelf: 'center'
    }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, loading, error } = auth;

  return { email, password, loading, error };
}

export default connect (mapStateToProps, { emailChanged, passwordChanged, loginUser }) (WellcomePage);