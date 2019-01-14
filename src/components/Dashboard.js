import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import BurgerMenu from './BurgerMenu';

import styles from './styles/Dashboard.module.css';
import animations from './styles/spinner.module.css';

export class Dashboard extends Component {
	render() {
		if (!this.props.isLoggedIn) {
			return <Redirect to="/login" />;
		}
		if (this.props.loading) {
			return (
				<div className={animations.container}>
					<div className={animations.loader} />
				</div>
			);
		}
		return (
			<div>
				{/* <BurgerMenu /> */}

				<NewComponent name={this.props.currentUser.firstName}/>
			</div>
		);
	}
}

export const NewComponent = props => {
	return (<div className={styles.container}>
		<p className={styles.header}>
			Welcome {props.name}!
		</p>
	</div>)
}

const mapStateToProps = state => {
	return {
		loading: state.auth.loading,
		isLoggedIn: state.auth.currentUser !== null,
		currentUser: state.auth.currentUser
	};
};

Dashboard.propTypes = {
	currentUser: PropTypes.object,
	isLoggedIn: PropTypes.bool
};

export default connect(mapStateToProps)(Dashboard);
