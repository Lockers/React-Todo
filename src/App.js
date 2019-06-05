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
 
  render() {
    return (
     
    )
  } 
}



export default App;
