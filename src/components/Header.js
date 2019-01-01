import React from 'react';
import styles from './styles/Header.module.css';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false
		};

		this.activeStyle = {
			fontWeight: "bold",
			fontStyle: "italic",
			color: "red"
		}
	}

	render() {
		return (
			<header>
				<nav className={styles.mainNav}>
					<NavLink to="/login">Login</NavLink>
					<NavLink to="/register" className={styles.registerButton}>Sign up</NavLink>
				</nav>
			</header>
		);
	}
}
