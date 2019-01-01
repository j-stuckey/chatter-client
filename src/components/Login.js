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

	handleSubmit = event => {
		event.preventDefault();
	};

	render() {
		return (
			<div className={styles.container}>
				<h1 className={styles.header}>Login</h1>
				<form className={styles.form} onSubmit={this.handleSubmit}>

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
				</form>

				<Link to="/register" className={styles.registerLink}>Don't have an account? Register here.</Link>
			</div>
		);
	}
}
