import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import TodoRdeducer from './TodoReducer';
import FetchTodos from './FetchTodos';

export default combineReducers({
    auth : AuthReducers,
    todos: TodoRdeducer,
    fetchs: FetchTodos,
    
});