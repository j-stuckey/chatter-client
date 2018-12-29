import React from 'react';
import styles from './styles/BurgerMenu.module.css';

export class BurgerMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};
	}
	handleClick() {
		//sets state to show the hamburger menu as clicked
		this.setState({ clicked: !this.state.clicked });
	}
	render() {
		return (
			<button
				className={this.state.clicked ? styles.burger : styles.changed}
				onClick={() => this.handleClick()}
			>
				<div className={styles.line1} />
				<div className={styles.line2} />
				<div className={styles.line3} />
			</button>
		);
	}
}
