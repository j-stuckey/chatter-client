import React, { Component } from 'react';
import styles from './styles/App.module.css';

class App extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.header}>Hello</h1>
            </div>
        );
    }
}

export default App;
