import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const TodoApp = props => {
/* 
  onSaveTodo(newTodo){
    const todoList = this.state.todos;
    this.setState({
      todos: [...todoList, newTodo],
    });
  } */
    return (
      <div className="container">
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    );

}
export default TodoApp;