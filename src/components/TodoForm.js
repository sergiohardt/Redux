//import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';
import { setText, addTodo } from '../actions';

const TodoForm = ({ text, setText, addTodo }) => {
		return (
			<form
				className="row" 
				onSubmit={(e) => {
				e.preventDefault();
				addTodo(text)}}>
				<div className="input-field col s10">
					<input required="required" id="todo-input" type="text" value={text} onChange={e => setText(e.target.value)} />
					<label htmlFor="todo-input">Label</label>
				</div>
				<div className="input-field col s2">
					<button className="btn waves-effect waves-light" style={{marginTop:5}}>Salvar</button>
				</div>
			</form>
		);
	}

function mapStateToProps(state){
	return {
		text: state.text
	};
}

const mapDispatchToProps = { setText, addTodo };
/* function mapDispatchToProps(dispatch){
	return{
		setText: (text) => dispatch(setText(text))
	}
} */

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);