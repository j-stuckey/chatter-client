import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class Dashboard extends Component {
	render() {
		const { isLoggedIn } = this.props;

		if (isLoggedIn) {
			return <h1>Welcome {this.props.currentUser.firstName}</h1>;
		} else {
			return <Redirect to="/login" />;
		}
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.auth.currentUser !== null,
		currentUser: state.auth.currentUser,
		test: state.auth.test
	};
};

export default connect(mapStateToProps)(Dashboard);
