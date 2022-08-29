import React from "react";
import { Route, Link } from "react-router-dom";
import MainPage from "./mainPage";
import Login from "./login";
import SelectedUser from "./selectedUser";
import Users from "./users";

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
            <Route path="/" exact component={MainPage} />
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
