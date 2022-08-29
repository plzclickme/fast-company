import React from "react";
import PropTypes from "prop-types";
import BookMark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";
import { Link } from "react-router-dom";

const UserTable = ({ users, onSort, selectedSort, onToggleBookMark, onDelete }) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя "
        },
        qualities: { name: "Качества ", component: (user) => <QualitiesList qualities={user.qualities} /> },
        professions: { path: "profession.name", name: "Профессия " },
        completedMeetings: { path: "completedMeetings", name: "Встретился, раз " },
        rate: { path: "rate", name: "Оценка " },
        bookmark: {
            path: "bookmark",
            name: "Избранное ",
            component: (user) => <BookMark status={user.bookmark} onClick={() => onToggleBookMark(user._id)} />
        },
        delete: {
            component: (user) => (
                <button onClick={() => onDelete(user._id)} className="btn btn-danger">
                    delete
                </button>
            )
        },
        selUser: {
            component: (user) => (
                <Link to={`users/${user._id}`}>
                    <button className="btn btn-primary">Показать карточку юзера</button>
                </Link>
            )
        }
    };
    return <Table onSort={onSort} selectedSort={selectedSort} columns={columns} data={users} />;
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSelectUser: PropTypes.func.isRequired
};
export default UserTable;
