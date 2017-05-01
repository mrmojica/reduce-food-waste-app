import React, {Component} from 'react';
import { Link } from 'react-router';
// import '../css/login.css';



class Login extends Component {

	render() {
		return (
			<div className='login-container'>
				<div className='login-wrapper'>
					<form className='form-container'>
						<input className='login-input' placeholder='Username or Email' name='userEmail' type='text' ref='accountName' />
						<input type='password' className='login-input' placeholder='Password' name='password' ref='password' />
						<div className='login-input'>
							<input type='checkbox' className='' name='rememberMe' value='rememberMe' ref='rememberMe' /> Remember Me
						</div>
						<button type='submit' className='login-button'>Login</button>
					</form>
				</div>
				<div className='createAccount-container'>
					<button type='button' className='login-button'>Create Account</button>
				</div>
			</div>
			)
	}
}

export default Login;