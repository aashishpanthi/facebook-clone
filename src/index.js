import React from 'react';
import ReactDOM from 'react-dom';
import {StateProvider} from './StateProvider'
import reducer, {initialState} from './reducer'
import './index.css';
import App from './App';

ReactDOM.render( 
	<StateProvider 
	 initialState={initialState}
	 reducer={reducer}
	>
		<App />
	</StateProvider>
	,  
	document.getElementById('root'));

