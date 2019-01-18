import React, { Component } from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import Login from './Login';
import Registration from './Registration';
import { connect } from 'react-redux';

import { refreshAuthToken } from '../actions/auth';

import { Route } from 'react-router-dom';

import styles from './styles/App.module.css';

class App extends Component {
	componentDidUpdate(prevProps) {
		if (!prevProps.loggedIn && this.props.loggedIn) {
			this.startPeriodicRefresh();
		}
		if (prevProps.loggedIn && !this.props.loggedIn) {
			this.stopPeriodicRefresh();
		}
	}

	componentWillMount() {
		//cleans up the refresh interval after logging out of app
		this.stopPeriodicRefresh();
	}

	startPeriodicRefresh() {
		this.refreshInterval = setInterval(
			() => this.props.dispatch(refreshAuthToken()),
			// sets refresh interval to 15 minutes
			15 * 60 * 1000
		);
	}

	stopPeriodicRefresh() {
		// if this is called a refresh interval was never started
		// just return
		if (!this.refreshInterval) {
			return;
		}

		// clears the refresh interval
		clearInterval(this.refreshInterval);
	}

	render() {
		return (
			<div className={styles.background}>
				<Route exact path="/" render={props => <Header {...props} />} />
				{/* <Route path="/dashboard" render={props => <Header {...props} />} /> */}
				<Route path="/login" component={Login} />
				<Route
					path="/register"
					render={props => <Registration {...props} />}
				/>
				<Route
					path="/dashboard"
					render={props => (
						<Dashboard {...props} render={() => <Header />} />
					)}
				/>
			</div>
		);
	}
}

export default App;
