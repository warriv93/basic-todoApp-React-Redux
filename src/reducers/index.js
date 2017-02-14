import {combineReducers} from 'redux';

import TodosReducer from "./todosReducer"

// "database tables"
const allReducers = combineReducers({
    //todos: TodosReducer,
    todoList: TodosReducer
});

export default allReducers;
