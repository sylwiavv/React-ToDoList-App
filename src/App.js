import React, { Component } from 'react';
import './App.css';

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
        list.push(draft);
        this.setState({tasks: list, draft: ''})
    };

    render() {
        const { title } = this.props;
        const { tasks, draft } = this.state;

        return (
            <div className="app-container">
                <h3>{this.props.title}</h3>
                <input type='text' onChange={this.upDateDraft} value={draft} />
                <button onClick={this.addToDo} className="btn">Dodaj zadanie</button>
                <ul className="tasks-container">
                    {tasks.map((task,i) => <li key={'task ' + i} className="single-task">{task} <i className="far fa-trash-alt"></i></li> )}
                </ul>
            </div>
        );
    }
}

class App extends Component {
    myTasks = [
        'Zadanie 1',
        'Zadnie 2',
        'Zadanie 3',
        'Zadanie 4'
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
