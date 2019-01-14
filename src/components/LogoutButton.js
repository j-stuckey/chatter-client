import React from 'react';
import buttonStyles from './styles/button.module.css';

export const LogoutButton = props => {
	return (
		<button
			onClick={props.onClick}
			type="button"
			className={buttonStyles.logoutButton}
		>
			Logout
		</button>
	);
};
