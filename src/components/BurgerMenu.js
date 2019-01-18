import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './styles/BurgerMenu.module.css';

export class BurgerMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};

		this.activeStyle = {
			fontWeight: 'bold',
			color: 'red',
			background: 'black'
		}
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
						className={
							this.state.show
								? styles.modalContent
								: styles.modalContentHide
						}
					>
						<NavLink
							to="/dashboard"
							activeStyle={this.activeStyle}
						>
							Dashboard
						</NavLink>
						<NavLink to="/settings" activeStyle={this.activeStyle}>Settings</NavLink>
					</div>
				</div>
			</span>
		);
	}
}

export default connect()(BurgerMenu);
