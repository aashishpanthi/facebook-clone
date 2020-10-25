import React from 'react'
import { Button } from '@material-ui/core';
import { auth, provider} from './firebase'
import {useStateValue} from './StateProvider'
import {actionType} from './reducer'
import './ess/css/login.css'

function Login() {
	
	const [state, dispatch] = useStateValue()

	const signIn = () =>{
		auth.signInWithPopup(provider)
		.then(result => {
			dispatch({
				type: actionType.SET_USER,
				user: result.user,
				email:result.additionalUserInfo.profile.email,
			})
		})
		.catch(error =>{
			console.log(error.message)
		})
	}

	return (
		<div className='login'>
			<div className='login__logo'>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook-logo" />
			<img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="Facebook" />
			</div>
			<Button type='submit' onClick={signIn}>
				Sign In
			</Button>
		</div>
	)
}

export default Login