import {EMAIL_CHANGED, PASSWORD_CHANGED, USER_REGISTER, REGISTER_SUCCESS,
        REGISTER_FAIL, LOGIN_USER, LOGIN_SUCCESS , LOGIN_FAIL} from '../actions/type';


const INIT_STATE = { email: '', password: '', user: null, loading: false , error: '', isLoggedIn: false  };

export default (state = INIT_STATE, action ) => {
    switch (action.type) {

        case EMAIL_CHANGED:
            return { ...state, email: action.payload };

        case PASSWORD_CHANGED: 
            return { ...state, password: action.payload };

        case USER_REGISTER:
            return{ ...state, error: '' , loading: true};

        case REGISTER_SUCCESS:
            return{ ...state, user: action.payload , email: '', password: '', loading: false };

        case REGISTER_FAIL:
            return{ ...state, error: 'Registeration Failed', loading: false}


        case LOGIN_USER: 
            return { ...state, error: '', loading: true}

        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, loading: false, isLoggedIn: true }

        case LOGIN_FAIL:
            return { ...state, error : 'Login Failed', password: '' , loading: false}

        

        default : 
            return state;
    }
}