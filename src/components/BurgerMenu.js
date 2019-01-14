import React from 'react';
import { connect } from 'react-redux';

import styles from './styles/BurgerMenu.module.css';

export class BurgerMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}
	handleClick() {
		//sets state to show the hamburger menu as clicked
		this.setState({ show: !this.state.show });
	}

	render() {
		return (
			<span>
				<button
					className={this.state.show ? styles.changed : styles.burger}
					onClick={() => this.handleClick()}
				>
					<div className={styles.line1} />
					<div className={styles.line2} />
					<div className={styles.line3} />
				</button>

				<div className={this.state.show ? styles.modal : null}>
					<div
						className={this.state.show ? styles.modalContent : null}
					/>
				</div>
			</span>
		);
	}
}

export default connect()(BurgerMenu);
