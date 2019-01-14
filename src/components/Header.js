import React from 'react';
import styles from './styles/Header.module.css';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

import { GuestLinks } from './GuestLinks';
import { LogoutButton } from './LogoutButton';

export class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false
		};
	}

	logOut = event => {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	};


	render() {

		return (
			<header>
				<nav className={this.props.isLoggedIn ? styles.mainNavLeft : styles.mainNav}>
					{this.props.isLoggedIn ? <LogoutButton onClick={this.logOut}/> : <GuestLinks /> }
				</nav>
			</header>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.auth.currentUser !== null,
		currentUser: state.auth.currentUser
	};
};

export default connect(mapStateToProps)(Header);
