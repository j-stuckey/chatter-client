import React from 'react';

export const Menu = (props) => {
	return <div className={props.className}>
		{props.children}
	</div>;
};
