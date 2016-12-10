//action STATE machine

const initialState = {
    items: [
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

 function todos (state = initialState, action) {
    switch(action.type){
        // case "TODO_SELECTED":
        //     return action.payload
        //     break;

        case "ADD_TODO":
            //newState = object copy of oldstate + oldstate items + new object item in array
            var newState =  Object.assign( {}, state, {
                items: [
                    ...state.items,
                    {
                        id: action.id,
                        activity: action.activity,
                        date: action.time
                    }
                ]
            })
            console.log("Newstate: ", newState);
            return newState;
            break;
        default:
            return state;
    }
    return state;
}

export default todos;
