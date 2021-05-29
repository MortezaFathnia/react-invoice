import React, { Fragment } from 'react';
import classes from './Users.module.scss';

const Users = () => {
    return (
        <div className={`${classes.userWrapper}`}>
            <div>
                <h4>from</h4>
                <div className={`${classes.cart}`}>
                    <h3>John Smith</h3>
                    <p>john@company.com</p>
                    <p>Mashhad</p>
                    <p>Iran</p>
                    <p>+1234556</p>
                </div>
            </div>
            <div>
                <h4>to</h4>
                <div className={`${classes.cart}`}>
                    <h3>John Doe</h3>
                    <p>john@company.com</p>
                    <p>Mashhad</p>
                    <p>Iran</p>
                    <p>+1234556</p>
                </div>
            </div>
        </div>
    )
}

export default Users
