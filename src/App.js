import React, {Component} from 'react';

const todoTest = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
];


class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(prop) {
    super(prop)
    this.state = {
      todoList: todoTest,
      todoName: '',
    };
  }
  changeHandler = (event) => {
    this.setState({
      todoName: event.target.value,
    });
  }

  addTodo = () => {
    const newTodo = {
      id: Date.now(),
      task: this.state.todoName,
      completed: true,
    };

    const newTodoList = this.state.todoList.concat(newTodo);

    this.setState({
      todoList: newTodoList,
      todoName: '',
    });
  }

  removeComplete = completed => {
      const completedTasks = this.state.todoList.filter(fr =>  this.state.completed === true);
      this.setState({
        todoList: completedTasks,
      });
  }
  render() {
    return (
      <div>
        <h3>My Todo:</h3>
        {
          this.state.todoList.map(todo => (
            <div key={todo.id}>
              {todo.task}
              <input type='checkbox' onClick='someFunction()' />
            </div>
          ))
        }
        <TodoAdder
          todoName={this.state.todoName}
          changeHandler={this.changeHandler}
          addTodo={this.addTodo}
        />
        <RemoveAllComplete
          todoName={this.state.todoName}
          changeHandler={this.changeHandler}
          removeComplete={this.removeComplete} />
      </div>
    );
  } 
}
function TodoAdder({ todoName, changeHandler, addTodo }) {
  return (
    <div>
      <input
        value={todoName}
        onChange={changeHandler}
        type="text"
      />
      <button onClick={addTodo}>Add Todo!!</button>
    </div>
  );
}
function RemoveAllComplete({ todoName, changeHandler, removeComplete }) {
  return (
    <div>
      <button onClick={removeComplete}>Remove Complete</button>
    </div>
  );
}


export default App;
