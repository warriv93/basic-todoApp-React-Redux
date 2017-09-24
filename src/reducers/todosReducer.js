//action STATE machine


const initialState = {
    todos: [
        {
          "id" : 1,
          "activity" : "lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut",
          "date" : "0:51"
        }, {
          "id" : 2,
          "activity" : "sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in",
          "date" : "12:06"
        }, {
          "id" : 3,
          "activity" : "suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non",
          "date" : "16:09"
        }, {
          "id" : 4,
          "activity" : "congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat",
          "date" : "5:05"
        }, {
          "id" : 5,
          "activity" : "vel nisl duis ac nibh fusce lacus purus aliquet at feugiat",
          "date" : "16:02"
        }
    ]
}

 function reducer (state = initialState, action) {
    switch(action.type){
        // case "TODO_SELECTED":
        //     return action.payload

        case "TODO_ADD": {
            //newState = object copy of oldstate + oldstate items + new object item in array
            var newState =  Object.assign( {}, state, {
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        activity: action.payload,
                        date: action.time
                    }
                ]
            })
            return newState;
        }
        case "TODO_ADD_ERROR": {
            //newState = object copy of oldstate + oldstate items + new object item in array
            return Object.assign( {}, state, {
                todos: [
                    ...state.todos,
                    {
                        activity: action.payload,
                    }
                ]
            })
        }
        case "TODO_DELETE": {
            let newState =  Object.assign( {}, state, {
                todos: [
                    ...state.todos
                ]
            })
            for (var i = 0; i < newState.todos.length; i++) {
                if (newState.todos[i].id === action.payload) {
                    newState.todos.splice(i, 1);
                    break;
                }
            }
            return newState;
        }
        case "TODO_MODIFY": {
            let newState =  Object.assign( {}, state, {
                todos: [
                    ...state.todos
                ]
            })
            for (var j = 0; j < newState.todos.length; j++) {
                if (newState.todos[j].id === action.payload) {
                    newState.todos[j] = {
                        "activity" : "gg",
                         "date" : "00:00"
                    }
                    break;
                }
            }
            return newState;
        }

        default:
            return state;
    }
}

export default reducer;
