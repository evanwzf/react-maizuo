import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers} from 'redux';

const reducers = combineReducers({
// 	list: function(state=[], action) {
// 		switch(action.type) {
// 			case "GET_FILMS_DATA":
// 				var newState = [...state];
// 				newState.push(action.payload);
// 				return newState;
//             case "GET_CAROUSEL_DATA":
//                 var newState = [...state];
// 				newState.push(action.payload);
// 				return newState;
// 			default:
// 				return state;
// 		}
// 	}
});
// const store = createStore(reducers, {});

// function renderPage() {
	ReactDOM.render(<App/>, document.getElementById('root'));
// }
// renderPage();

// store.subscribe(renderPage);
