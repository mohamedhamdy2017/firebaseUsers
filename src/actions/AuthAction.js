import firebase from 'firebase';
import {EMAIL_CHANGED, PASSWORD_CHANGED, USER_REGISTER, REGISTER_SUCCESS,
        REGISTER_FAIL,LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAIL } from './type';
import { NavigationActions } from 'react-navigation';



export const emailChanged = (text) => {
    return{
        type: EMAIL_CHANGED,
        payload: text
    }
};

export const passwordChanged = (text) => {
    return{
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const registerUser = ({ email, password, navigation }) => {
    return(dispatch)=>{
            dispatch({ type: USER_REGISTER})
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => registerSuccess(dispatch, user))
        .then(() => navigation.navigate('home')) 
        .catch( () => registerFail(dispatch))
    }
}

const registerSuccess = (dispatch, user) => {
    dispatch({
        type: REGISTER_SUCCESS,
        payload: user
    });
};


const registerFail = (dispatch) => {
    dispatch({
        type: REGISTER_FAIL,
    });
};


export const loginUser = ({ email, password, navigation}) => {
   
    return(dispatch)=>{
            dispatch({ type: LOGIN_USER})
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginSuccess(dispatch, user))
        .then(() => navigation.navigate('home')) 
        .catch(() => loginFail(dispatch))
    }
}


const loginSuccess = (dispatch, user ) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    })
};


const loginFail = (dispatch) => {
    dispatch({
        type: LOGIN_FAIL,
    });
};


