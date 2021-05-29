import React, { Fragment } from 'react';
import Users from '../users/Users';
import Invoice from '../invoice/Invoice';
import classes from './Home.module.scss';

const Home = () => {
    return (
        <div>
            <div className={`${classes.headerWrapper}`}>
                <h2 className={`${classes.header}`}>Invoice</h2>
                <div className={`${classes.logo}`}></div>
            </div>
            <Fragment>
                <Users />
                <Invoice />
            </Fragment>
        </div>
    )
};

export default Home