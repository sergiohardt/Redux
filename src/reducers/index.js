import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import textReducer from './textReducer';

export default combineReducers({
	todos: todosReducer,
	text: textReducer,
});

/* const INITIAL_STATE = {
	todos: ['estudar react', 'para subir de nivel'],
	text: ''
}

export default function rootReducer(state = INITIAL_STATE, action)
{
	switch (action.type){
		case SET_STATE:
			return { ...state, text: action.text }
		case ADD_TODO:
	}
	return state;
} */