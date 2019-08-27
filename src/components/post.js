import React, { Component } from 'react'

export default class Post extends Component {

    state = {
        post: []
    }

    async componentDidMount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        this.setState({post: data})
        console.log(data);
    }

    render(){
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.post.map(post => {
                        return <div key = {post.id}>
                            <h3>{"Titulo: " + post.title}</h3>
                            <p>{"Estado: "+ post.completed}</p>    
                        </div>
                    })
                }

            </div>
        )
    }
} 