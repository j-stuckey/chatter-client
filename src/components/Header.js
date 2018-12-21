import React from 'react';
import styles from './styles/Header.module.css';
import { Route, Redirect, Link } from 'react-router-dom';

export function Header(props) {
    if (!props.loggedIn) {
        return <Redirect to="/login" />;
    }

    return (
        <nav>
            <Link to="/stuff" className={styles.link}>
                Stuff
            </Link>
        </nav>
    );
}
