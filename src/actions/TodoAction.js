import firebase from 'firebase';
import { USER_UPDATE, CREATE_USER, FETCH_TODOS, SAVE_USER, ITEM_UPDATE } from './type';




export const userUpdate = ({prop, value}) => {
    return {
        type: USER_UPDATE,
        payload: {prop, value}
    }
};


export const createUser = ({ firstName, lastName, phoneNum, email, gender, navigation }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ firstName, lastName, phoneNum, email, gender })
        .then( () => {
            dispatch({type: CREATE_USER})   
        })
        .then(
            () => navigation.navigate('TodoList')
        )
        
    }
    
}

export const fetchUser = () => {
    const { currentUser } = firebase.auth();

    return ( dispatch ) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshat => {
            dispatch({type: FETCH_TODOS , payload: snapshat.val()})

        })
    }

}

export const saveUser = ({ firstName, lastName, phoneNum, email, gender, uid, navigation }) => {
    const { currentUser } = firebase.auth();

    return ( dispatch ) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ firstName, lastName, phoneNum, email, gender })
        .then(() => 
            dispatch({type: SAVE_USER})
        )
        .then(
            () => navigation.navigate('TodoList')
        )
    }
}

export const deleteUser = ({uid , navigation}) => {
    const { currentUser } = firebase.auth();

    return () =>{
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(
            () => navigation.navigate('TodoList')
        )
    }
}


     