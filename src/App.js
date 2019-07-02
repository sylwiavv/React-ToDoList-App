import React, { Component } from 'react';
import './App.scss';
import ToDoItem from './components/ToDoItem/ToDoItem'

    class ToDoList extends Component {
    state = {
        tasks: this.props.tasks,
        draft: ''
    };

    upDateDraft = event => {
        this.setState({draft: event.target.value})
    };

    addToDo = () => {
        const { tasks, draft } = this.state;
        const list = tasks;
        list.push({text: draft});
        this.setState({tasks: list, draft: ''})
    };


    render() {
        const { title } = this.props;
        const { tasks, draft } = this.state;

        return (
            <div className="app-container">
                <h3>{this.props.title}</h3>
                <input className="form-control" type='text' onChange={this.upDateDraft} value={draft} />
                <button disabled={!draft} onClick={this.addToDo} className="btn">Dodaj zadanie</button>
                <ul className="tasks-container">
                    {tasks.map(task => <ToDoItem task={task}/>)}
                </ul>
            </div>
        );
    }
}

class App extends Component {
    myTasks = [
        {text:'Zadanie 1'},
        {text:'Zadnie 2'},
        {text:'Zadanie 3'},
        {text:'Zadanie 4'}
    ];

    render() {
        return (
            <div>
                <ToDoList title='Moja lista zadań' tasks={this.myTasks}  />
            </div>
        );
    }
}


export default App;