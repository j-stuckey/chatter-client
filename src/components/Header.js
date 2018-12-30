import React from 'react';
import styles from './styles/Header.module.css';
import { Link, NavLink } from 'react-router-dom';

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
					<NavLink exact to="/" activeStyle={this.activeStyle}>Home</NavLink>
					<NavLink to="/login" activeStyle={this.activeStyle}>Login</NavLink>
					<NavLink to="/dashboard" activeStyle={this.activeStyle}>Dashboard</NavLink>
				</nav>
			</header>
		);
	}
}
