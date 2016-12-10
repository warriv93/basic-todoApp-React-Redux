import React, { Component } from 'react';
import logo from '../extras/logo.svg';
import '../styles/App.css';

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Todo list",
            easteregg: true
        };
    }

    handleClick() {
        if (this.state.easteregg) {
            this.setState({
                title: "Todo list with penguines inside",
                easteregg: false
            });
        }
        else {
            this.setState({
                title: "Todo list",
                easteregg: true
            });
        }
    }

    //render component jsx (html)
    render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2 onClick={() => this.handleClick()}>
                  {this.state.title}
              </h2>
            </div>
            <p className="App-intro">
              Todo list build using the React-redux framework
            </p>
          </div>
        );
    }
}

export default header;
