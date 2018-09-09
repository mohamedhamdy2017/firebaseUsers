import { USER_UPDATE, CREATE_USER, SAVE_USER, ITEM_UPDATE } from '../actions/type';

const INIT_STATE = {firstName:'', lastName: '', phoneNum: '', email: '', gender: '' }

export default ( state = INIT_STATE, action) => {
    switch(action.type) {
        
        case USER_UPDATE:
            return { ...state, [action.payload.prop] : action.payload.value};
        
        case CREATE_USER:
            return INIT_STATE;

        case SAVE_USER: 
            return INIT_STATE;
        
        default:
            return state;
    }
} 