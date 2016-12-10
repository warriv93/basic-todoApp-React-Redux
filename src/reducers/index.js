import {combineReducers} from 'redux';

import TodosReducer from "./reducer-modify-todos"

// "database tables"
const allReducers = combineReducers({
    //todos: TodosReducer,
    todos: TodosReducer
});

export default allReducers;
