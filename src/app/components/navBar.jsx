import React from "react";
import { Route, Link } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import SelectedUser from "./selectedUser";
import Users from "./layouts/users";

const NavBar = () => {
    return (
        <>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                        Main
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">
                        Users
                    </Link>
                </li>
            </ul>
            <Route path="/" exact component={Main} />
            <Route path="/login/" component={Login} />
            <Route path="/users/" exact component={Users} />
            <Route
                path="/users/:id"
                render={({ match, history }) => {
                    const id = match.params.id;

                    return <SelectedUser userId={id} history={history} />;
                }}
            />
        </>
    );
};

export default NavBar;
