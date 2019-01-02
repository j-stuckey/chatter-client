import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles/Login.module.css';

export class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			usernameError: null,
			passwordError: null
		};
	}

	handleUsername = event => {
		this.setState({ username: event.target.value });
	};

	handlePassword = event => {
		this.setState({ password: event.target.value });
	}

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ usernameError: null, passwordError: null });
		if (!this.state.username) {
			this.setState({ usernameError: 'Username cannot be blank'});
		} 
		if (!this.state.password) {
			this.setState({ passwordError: 'Password cannot be blank'});
		}
		// do the rest of the logic here
		console.log(this.state);
	};

	render() {

		return (
			<div className={styles.container}>
				<form className={styles.form} onSubmit={this.handleSubmit}>
					<fieldset className={styles.fieldset}>

						<legend className={styles.legend}>Login</legend>

						<label htmlFor="username" className={styles.formLabel}>Username</label>
						<p className={styles.error}>{this.state.usernameError}</p>
						<input
							className={styles.formInput}
							type="text"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleUsername}
						/>

						<label htmlFor="password" className={styles.formLabel}>Password</label>
						<p className={styles.error}>{this.state.passwordError}</p>
						<input
							className={styles.formInput}
							type="password"
							name="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handlePassword}
						/>

						<button type="submit" className={styles.loginButton}>Login</button>
					</fieldset>
				</form>

				<Link to="/register" className={styles.registerLink}>Don't have an account? Register here.</Link>
			</div>
		);
	}
}
