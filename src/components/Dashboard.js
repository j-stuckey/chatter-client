import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import BurgerMenu from './BurgerMenu';

import styles from './styles/Dashboard.module.css';

export class Dashboard extends Component {
	render() {
		if (!this.props.isLoggedIn) {
			return <Redirect to="/login" />;
		}
		return (
			<div className={styles.background}>
				{/* <div className={styles.loader} /> */}
				<BurgerMenu />
				<div className={styles.container}>
					<p className={styles.header}>
						Welcome {this.props.currentUser.firstName}
					</p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.auth.currentUser !== null,
		currentUser: state.auth.currentUser
	};
};

Dashboard.propTypes = {
	currentUser: PropTypes.object,
	isLoggedIn: PropTypes.bool
};

export default connect(mapStateToProps)(Dashboard);
