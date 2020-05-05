import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/Addtodo'
import About from './components/pages/About'
import './App.css';
import axios from 'axios';
import { v1 as uuidv1 } from 'uuid';

class App extends Component {
  
  state= {
    todos:[]
  }
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }
  //Toggle completed
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(
      todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      }
    )})
  }

  //Delete todo
  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  // Add Todo
  addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => {
        res.data.id = uuidv1();
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };
  render(){
  return (
   
   <Router>
      <div className="App">
    <div className="container">
    <Header />
    <Router exact path="/" render={props => (
      <React.Fragment>
         <AddTodo addTodo={this.addTodo}/>
         <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
        </React.Fragment>
    )}/>
    <Route path="/about" component={About} />
     
    </div>
    </div>
   </Router>
  );
}
}

export default App;
