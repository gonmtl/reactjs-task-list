import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    
    onSend = (event) => {
        this.props.addTask(this.state.title, this.state.description);
        event.preventDefault();
    }


    onTipping = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        
        return (
            <form onSubmit={this.onSend}>
                <input 
                    type="text"
                    name="title" 
                    placeholder="Task Name" 
                    onChange={this.onTipping} 
                    value={this.state.title} />
                <br />

                <textarea 
                    name="description"
                    placeholder="Task Description" 
                    onChange={this.onTipping} 
                    value={this.state.description} />
                <br />

                <button type="submit">
                    Guardar tarea
                </button>    
            </form>
        )
    }

}

