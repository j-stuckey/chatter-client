import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import BurgerMenu from './BurgerMenu';

// import styles from './styles/dashboard.module.css';

export class Dashboard extends Component {
	render() {
		if (!this.props.isLoggedIn) {
			return <Redirect to="/login" />;
		}
		return (
			<div>
				{/* <div className={styles.loader} /> */}
				<BurgerMenu />
				<h1>Welcome {this.props.currentUser.firstName}</h1>
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
