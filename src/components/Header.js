import React from 'react';
import styles from './styles/Header.module.css';
import { Route, Redirect, Link } from 'react-router-dom';
import { BurgerMenu } from './BurgerMenu'

export class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false
		};
	}

	render() {
		return (
			<header>
				<nav className={styles.mainNav}>
					<Link to="/">Home</Link>
					<Link to="/stuff">Stuff</Link>

					<BurgerMenu />
				</nav>
			</header>
		);
	}
}