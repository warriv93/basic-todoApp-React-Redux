import React, {Component} from 'react';
//dispatch is redux calling the action fucntion
import {bindActionCreators} from 'redux';
//make component aware of store (smart component or container)
import {connect} from 'react-redux';
import {selectTodo, addTodo} from '../actions';

class Todolist extends Component {
    addTodoItem () {
        let activity = "play fotboll"
        this.props.addTodo(activity);
    }

    todoItemClicked (todo) {
        this.props.selectTodo(todo);
        console.log("item " + todo.id +" clicked")

    }

    modifyTodoItem (todo) {
        this.props.selectTodo(todo);
        console.log("item " + todo.id +" clicked")

    }

    deleteTodoItem(todo) {
        this.props.selectTodo(todo);
        console.log("item " + todo.id +" clicked")
    }

// function(todo){} =samma sak som= (todo)=>{}
    loadListItems () {
        //render list reversed
        return this.props.todos.reverse().map( (todo) =>{
            return (
                <li className="list-group-item" key={todo.id}
                onClick={()=>{this.todoItemClicked(todo)}}
                >
                    <div>
                        <p>{todo.date}</p>
                        <p>{todo.activity}</p>
                    </div>
                    <div>
                        <button className="btn btn-danger"
                            onClick={()=>this.deleteTodoItem(todo)}
                            >
                            Delete
                        </button>
                        <button className="btn btn-warning"
                            onClick={()=>this.modifyTodoItem(todo)}
                            >
                            Modify
                        </button>
                    </div>
                </li>
            )
        });
    }

    render () {
        return (
            <div >
                <button id="addTodoBtn" className="btn btn-success"
                    onClick={ ()=> this.addTodoItem() }
                    >
                     Add new Todo
                </button>
                <ul className="ul">
                    {this.loadListItems()}
                </ul>
            </div>
        )
    }
}

//takes state (piece of my store data) and passes in into the component as a property
function mapStateToProps(store) {
    return {
        todos: store.todos.items
    };
}

//dispatch is redux calling the action fucntion
function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            selectTodo: selectTodo,
            addTodo: addTodo
        }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Todolist);
