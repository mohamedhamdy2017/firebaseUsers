import React, { Component} from 'react';
import { createSwitchNavigator , createStackNavigator  } from 'react-navigation';
import WellcomePage from '../WellcomePage';
import HomeNavScreen from './HomeNavScreen';
import EditTodo from '../EditTodo';
import RegisterForm from '../RegisterForm';


const EditNav = createStackNavigator({
    editTodo:{
        screen: EditTodo
    }
})

const mainRoot = createStackNavigator({
    wellcome: {screen : WellcomePage},
    register : {screen : RegisterForm},
})

const NavigatorScreen = createSwitchNavigator({
    main : {
        screen : mainRoot,
      
    },
    home: {
        screen: HomeNavScreen,
      
    },
     
    EditNav,
   
})

export default NavigatorScreen;