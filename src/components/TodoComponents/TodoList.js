import React, { Component } from 'react'

export class TodoList extends Component {
    getStyle = () => {
        return {
            backgroundColor: 'lightgrey',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
     }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} />
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button></p>
            </div>
        )
    }
}


const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    float: 'right'
}
export default TodoList

