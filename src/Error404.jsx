import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <h1 className="text-center">Error 404 Page</h1>
            <NavLink className="btn btn-primary mt-2" to="/">Go Home</NavLink>
        </div>
    )
}

export default Error404;
