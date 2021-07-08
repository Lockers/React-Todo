import React from 'react'

const TodoList = props => {
  
    const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type='checkbox' onChange={props.markComplete(this, id)} />
                    {title}
                    <button onClick={props.delTodo(this, id)} style={btnStyle}>X</button></p>
            </div>
        )
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

