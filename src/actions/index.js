//Action Creator - to tell app that the user interacted with the application
import axios from 'axios';

 // action types

let nextTodoId = 5;

//on todo click
export const selectTodo = (todo) => {
    //type and return value
    return {
        type: "TODO_SELECTED",
        payload: todo
    }
};

export function deleteTodo (todoId) {
    return {
        type: "TODO_DELETE",
        payload: todoId
    }
};

export function modifyTodo (todoId) {
    return {
        type: "TODO_MODIFY",
        payload: todoId
    }
};

export function addTodo(activity) {
    //increment added items id
    nextTodoId++;
    //calculate current hour:minute
    let d = new Date();
    let currentTime = d.getHours() +":"+d.getMinutes();
    if(activity){
        return {
            type: "TODO_ADD",
            id: nextTodoId,
            payload: activity,
            time: currentTime
        }
    }else {
        return function(dispatch){
            axios.get("http://foaas.herokuapp.com/awesome/Simon")
            .then((response) => {
                //pass data to reducer
                dispatch({
                    type: "TODO_ADD",
                    id: nextTodoId,
                    payload: response.data.message,
                    time: currentTime
                });
            }).catch((err) => {
                dispatch({
                    type: "TODO_ADD_ERROR",
                    payload: err.message + ", try to delete and add the todo again"
                });
            })
        }
    }
};


//An action gets invoked by a component to be used

//when an action is used it will tell all reducers
