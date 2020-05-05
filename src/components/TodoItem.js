import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
       return {
           background: '#f4f4f4',
           padding : '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.completed ? 
           'line-through' : 'none'
       }
    }
    componentWillMount =(props) => {
       
    }
   
    render() {
        const {_id, title } = this.props.todo;
      
        return (
            <div style= {this.getStyle()}>
               <p>
                   <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo._id)}/>{' '}
                   { title }
                   <button onClick={this.props.delTodo.bind(this, _id)} style={btnStyle}>x</button>
                </p> 
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes ={
    todo : PropTypes.array.isRequired,
    markComplete : PropTypes.func.isRequired,
    delTodo : PropTypes.func.isRequired,
  }
  const btnStyle={
      background : '#ff0000',
      color:"#fff",
      border:'none',
      padding :'5px 9px',
      borderRadius :'50%',
      cursor: 'pointer',
      float: 'right'
  }

export default TodoItem
