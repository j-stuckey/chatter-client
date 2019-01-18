import React from 'react';
import styles from './styles/Greeting.module.css';

export const Greeting = props => {
	return <p className={styles.header}>Welcome {props.name}!</p>;
};
