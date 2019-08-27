import React, { Component } from 'react';
import Task from './task.js';
import PropTypes from 'prop-types'

class Tasks extends Component {
    render(){
        return this.props.tasks.map(task => 
        <Task 
            task={task} 
            key={task.id} 
            deleteTask={this.props.deleteTask} 
            checkDone={this.props.checkDone}
        />);
    }
}

Tasks.propTypes = { //valida que si o si se le pasa un array
    tasks: PropTypes.array.isRequired
}

export default Tasks;