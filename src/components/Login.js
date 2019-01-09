import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import styles from './styles/forms.module.css';

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
	};

	resetForm() {
		this.setState({ username: '', password: '' });
	}

	handleSubmit = event => {
		event.preventDefault();
		// do the rest of the logic here
		this.resetForm();
		this.props
			.dispatch(login(this.state.username, this.state.password))
			.then(() => this.props.history.push('/dashboard'));
	};

	render() {
		return (
			<div className={styles.container}>
				{this.props.isLoggedIn ? <Redirect to="/dashboard" /> : null}

				<form
					className={styles.form}
					onSubmit={this.handleSubmit}
					id="login"
				>
					<fieldset className={styles.fieldset}>
						<legend className={styles.legend}>Login</legend>
						<p className={styles.error} aria-live="polite">
							{this.props.error}
						</p>
						<label htmlFor="username" className={styles.formLabel}>
							Username
						</label>

						<input
							className={styles.formInput}
							type="text"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleUsername}
						/>

						<label htmlFor="password" className={styles.formLabel}>
							Password
						</label>
						<input
							className={styles.formInput}
							type="password"
							name="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handlePassword}
						/>

						<button type="submit" className={styles.loginButton}>
							Login
						</button>
					</fieldset>
				</form>

				<Link to="/register" className={styles.registerLink}>
					Don't have an account? Register here.
				</Link>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		error: state.auth.error,
		isLoggedIn: state.auth.currentUser !== null
	};
};

Login.propTypes = {
	isLoggedIn: PropTypes.bool
};

export default connect(mapStateToProps)(Login);
