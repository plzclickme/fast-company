import React, { useState, useEffect } from "react";
import Users from "./components/users";
import API from "./api";

function App() {
    const [users, setUsers] = useState(API.users.fetchAll());
    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);
    //console.log(users, "users");
    //const blabla = api.users.fetchAll();
    //console.log(blabla, "blabla");
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
        console.log(id);
    };
    return (
        <div>
            <Users onDelete={handleDelete} onToggleBookMark={handleToggleBookMark} users={users} />
        </div>
    );
}

export default App;
