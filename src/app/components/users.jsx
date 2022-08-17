import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SearchStatus from "./searchStatus";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import GroupList from "./groupList";
import User from "./user";
import api from "../api";
const Users = ({ users: allUsers, ...rest }) => {
    //console.log("allUsers", allUsers, "allUsers");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProf, setSelectedProf] = useState();
    const [professions, setProfessions] = useState();
    const pageSize = 2;
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, [currentPage]);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
        // console.log(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
        //console.log("page: ", pageIndex);
    };
    const clearFilter = () => {
        setSelectedProf();
    };

    const filteredUsers = selectedProf
        ? allUsers.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
        : allUsers;
    const count = filteredUsers.length;
    const usersCrop = paginate(filteredUsers, currentPage, pageSize);
    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList selectedItem={selectedProf} items={professions} onItemSelect={handleProfessionSelect} />
                    <button className="btn btn-secondary mt-2" onClick={clearFilter}>
                        Все профессии
                    </button>
                </div>
            )}
            {count > 0 && (
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Профессия</th>
                                <th scope="col">Встретился, раз</th>
                                <th scope="col">Оценка</th>
                                <th scope="col">Избранное</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {usersCrop.map((user) => (
                                <User {...rest} {...user} key={user._id} />
                            ))}
                        </tbody>
                    </table>

                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
Users.propTypes = {
    users: PropTypes.array
};

export default Users;
