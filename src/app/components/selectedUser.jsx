import React, { useState, useEffect } from "react";
import api from "../api";
import Quality from "./quality";
import PropTypes from "prop-types";

const SelectedUser = ({ userId, history }) => {
    const [selectedUser, setSelectedUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setSelectedUser(data));
    }, []);

    console.log(selectedUser, "selectedUser");

    const handleSave = () => {
        history.replace("/users");
    };

    if (selectedUser) {
        return (
            <>
                <h2>{selectedUser.name}</h2>
                <h4>Профессия: {selectedUser.profession.name}</h4>
                <div>
                    {selectedUser.qualities.map((qual) => (
                        <Quality key={qual._id} {...qual} />
                    ))}
                </div>
                <div>Встретился, раз: {selectedUser.completedMeetings}</div>
                <div>Оценка: {selectedUser.rate}</div>
                <button
                    onClick={() => {
                        handleSave();
                    }}
                    className="btn btn-primary m-2"
                >
                    Все пользователи{" "}
                </button>
            </>
        );
    }
    return "Loading data about user...";
};

SelectedUser.propTypes = {
    history: PropTypes.object.isRequired,
    userId: PropTypes.string
};

export default SelectedUser;
