import React, {Component} from 'react';
import Todos from './components/TodoComponents/Todos';
import Header from './components/TodoComponents/Header';
import AddTodo from './components/TodoComponents/AddTodo';
import './components/TodoComponents/Todo.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Add Search Function',
        completed: false
      },
      {
        id: 2,
        title: 'Upload to Netlify',
        completed: false
      },
      {
        id: 3,
        title: 'Persist Data',
        completed: false
      },
      {
        id: 4,
        title: 'Kill Bill',
        completed: false
      },

    ]
  }

  //Check complete and put line through from CSS
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
        todo.completed = !todo.completed
        }
        return todo
    })})
  }
// Add a todo!
  addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
}

// Check if deleting correct todo by Id
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }
  // Clear all completed todos at once
  clearComplete = () => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.completed !== true)]})
  }

 render() {
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
          <AddTodo addTodo={this.addTodo} />
          <div className='clearComplete'>
            <button className='btn' onClick={this.clearComplete}>Clear Complete</button>
          </div>
        </div>
       </div>
    );
  } 
}

export default App;
