import React, { Component } from 'react';
import './App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/tasks.js';
import TaskForm from './components/taskForm.js';
import Post from './components/post.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  state = { //crea objeto con su propiedad "tasks" que los datos que importamos del archivo tasks
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = { //crea objeto con los datos
      title: title,
      description: description,
      id: this.state.tasks.length
    }

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  
  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTasks})
  }


  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTasks})
  }

  render(){ 
    return <div>
      <Router>

        <Link to="/">Lista de tareas</Link>
        <br />
        <Link to="/post">Posts</Link>

        <Route exact path= "/" render={() =>{
          return <div>
              <TaskForm addTask={this.addTask}/>
              <Tasks 
                tasks={this.state.tasks} 
                deleteTask = {this.deleteTask} 
                checkDone = {this.checkDone} /> 
          </div>

        }}>

        </Route>
          <Route path="/post" component={Post} />
        </Router>

    </div>
  }
}


export default App;
