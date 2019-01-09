import React from 'react';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { connect } from 'react-redux';

import styles from './styles/BurgerMenu.module.css';
import headerStyles from './styles/Header.module.css';

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

	logOut = event => {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	};

	render() {
		return (
			<div className={styles.container}>
				<button
					onClick={this.logOut}
					type="button"
					className={styles.logoutButton}
				>
					Logout
				</button>
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
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(BurgerMenu);
