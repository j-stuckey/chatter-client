import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles/Login.module.css';

export class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};
	}

	handleUsername = event => {
		this.setState({ username: event.target.value });
	};

	handlePassword = event => {
		this.setState({ password: event.target.value });
	}

	resetForm() {
		this.setState({ username: '', password: '' })
	}

	handleSubmit = event => {
		event.preventDefault();
		// do the rest of the logic here
		this.resetForm();
		// this.props.history.push('/dashboard');
	};

	render() {

		return (
			<div className={styles.container}>
				<form className={styles.form} onSubmit={this.handleSubmit} id="login">
					<fieldset className={styles.fieldset}>

						<legend className={styles.legend}>{this.props.legend}</legend>

						<label htmlFor="username" className={styles.formLabel}>Username</label>
						<input
							className={styles.formInput}
							type="text"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleUsername}
						/>

						<label htmlFor="password" className={styles.formLabel}>Password</label>
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
