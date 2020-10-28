/* concetrar os actions types e actions creators*/
// action type
export const SET_TEXT = 'SET_TEXT';

//action creator
export const setText = text => ({
	type: SET_TEXT,
	text
});


export const ADD_TODO = 'ADD_TODO';
export const addTodo = todo => ({
	type: ADD_TODO,
	todo
});


export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = todo => ({
	type: TOGGLE_TODO,
	todo
});
