import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import TodoList from '../TodoList';
import AddTodo from '../AddTodo';
import Icon from 'react-native-vector-icons/FontAwesome'


const TabNav = createBottomTabNavigator({

    AddTodo : {
        screen: AddTodo,
        navigationOptions: {      
            title: 'A  D  D ' ,
            tabBarIcon : ({ tintColor }) => (
                <Icon name="plus" size = {24} color ={tintColor} />
            ),
            
        },
    },

    TodoList : {
        screen: TodoList,
        navigationOptions: {
            tabBarLabel: 'L  i  s  t',
            tabBarIcon : ({ tintColor }) => (
                <Icon name="align-center" size = {24} color ={tintColor} />
            ),
               headerTitle: 'List'
        } 
}
},{
    tabBarPosition: 'bottom',
    tabBarOptions : {
        activeTintColor: 'red',
        inactiveTintColor: 'gray',  
 },
 navigationStyle:{
    drawUnderNavBar: true
 }
})
export default TabNav;