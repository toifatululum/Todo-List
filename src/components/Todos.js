import React, {Component} from 'react';
import TodoItem  from './TodoItem'
import PropTypes from 'prop-types';


class Todos extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
 
  render(){
    return this.props.todos.map((todo) =>(
      <TodoItem key ={todo.id} todo = {todo} markComplete = 
      {this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

//PropTypes
Todos.propTypes ={
  todos : PropTypes.array.isRequired,
  markComplete : PropTypes.func.isRequired,
  delTodo : PropTypes.func.isRequired,
}

export default Todos;
