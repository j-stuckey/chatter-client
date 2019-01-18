import React from 'react';
import animations from './styles/spinner.module.css';

export const LoadingSpinner = props => {
	return (
		<div className={animations.container}>
			<div className={animations.loader} />
		</div>
	);

};
