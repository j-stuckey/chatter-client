import React from 'react';
import { NavLink } from 'react-router-dom';
import buttonStyles from './styles/button.module.css';

export const GuestLinks = props => {
	return (<span>
		<NavLink to="/login">Login</NavLink>
		<NavLink to="/register" className={buttonStyles.registerButton}>
			Sign up
		</NavLink>
	</span>);
};
