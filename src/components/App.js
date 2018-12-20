import React, { Component } from 'react';
import styles from './styles/App.module.css';
import { refreshAuthToken } from '../actions/auth';

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
            <div className={styles.container}>
                <h1>Hello, world!</h1>
            </div>
        );
    }
}

export default App;
