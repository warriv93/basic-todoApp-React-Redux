//layout all the other child components
//stupid class
import React from 'react';

//name need to be with capital letter
import Header from '../containers/header'
import Todolist from '../containers/todo-list'

const App = () => (
    <div>
        <Header />
        {/* <h2> Todo list: </h2> */}
        <Todolist />
    </div>
)

//what to export
export default App;
//render component jsx (html)
