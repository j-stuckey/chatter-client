import React from 'react';

import { Redirect } from 'react-router-dom';

export const Dashboard = (props) => {
    if (!props.loggedIn) {
        return <Redirect to="/" />
    } else {
        return <h1>Hello!</h1>
    }
};
