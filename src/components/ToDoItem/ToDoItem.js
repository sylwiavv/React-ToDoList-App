import React, { Component } from 'react';
import {interfaceExtends} from "@babel/types";
import './ToDoItem.scss';

class ToDoItem extends Component {
    static defaultProps = {
        done: false
    };

    state = {
        done: false
    };

    buttonDone = () => {
        this.setState({done: !this.state.done})
    };

    render() {
        const {text} = this.props.task;

        return (
            <li className="single-task">{text}
                <button onClick={this.buttonDone}
                        className={this.state.done? 'doneTodo' : 'doTodo'}>
                    {this.state.done? 'Wykonane' : 'Do zrobienia'}
                </button>
            </li>)
    }
}

export default ToDoItem;