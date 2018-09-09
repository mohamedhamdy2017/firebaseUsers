import { FETCH_TODOS } from '../actions/type';

const INIT_STATE = {}

export default (state = INIT_STATE, action) => {
    switch(action.type) {

        case FETCH_TODOS:
            return action.payload

        default:
            return state;
    }
}