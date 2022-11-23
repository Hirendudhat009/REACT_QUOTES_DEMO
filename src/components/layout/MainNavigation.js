import { Fragment } from "react";
import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.logo}>Great Quotes</div>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink to="/qoutes" activeClassName={classes.active}>All Quotes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/new-qoutes" activeClassName={classes.active}>Add a Quotes</NavLink>
                        </li>
                    </ul>
                </nav>

            </header>
        </Fragment>
    )
}

export default MainNavigation;