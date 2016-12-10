//Action Creator - to tell app that the user interacted with the application

/*
 * action types
 */
let nextTodoId = 5;

//on user name click
export const selectTodo = (todo) => {

    //type and return value
    return {
        type: "TODO_SELECTED",
        payload: todo
    }
};

export function addTodo(activity) {
    //increment added items id
    nextTodoId = nextTodoId+1;
    //calculate current hour:minute
    let d = new Date();
    let currentTime = d.getHours() +":"+d.getMinutes();

//pass data to reducer
  return {
      type: "ADD_TODO",
      id: nextTodoId,
      activity: activity,
      time: currentTime
  }
};
//gets called in component to be used

//when an action is used it will tell all reducers
