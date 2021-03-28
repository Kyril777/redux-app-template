import React, { Component } from ‘react’;
import { createStore } from ‘redux’;

class ReduxApp extends Component {
	render() {


		// the Reducer
		const reducer = function(state, function) {
			if(action.type === “”){
				return action.payload
			}
			if(action.type === “”){
				return action.payload
			}
			return state;	
		}

		// the Store
		const store = createStore(reducer, “Peace”);

		// the Subscription
		store.subscribe(() => {
			console.log(“Store is now”, store.getState());
		})

		// the Dispatch
		store.dispatch({type: “”, payload: “”})
		store.dispatch({type: “”, payload: “”})

		return (
			<div>
				test
			</div>
		)
	}
}
