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

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }
  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
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
