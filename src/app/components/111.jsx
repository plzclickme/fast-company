import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SearchStatus from "./searchStatus";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import GroupList from "./groupList";
import api from "../api";
import UserTable from "./usersTable";
import _ from "lodash";
import SearchForm from "./searchForm";

const Users = () => {
    //console.log("users", users, "users");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProf, setSelectedProf] = useState();
    const [professions, setProfessions] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
    const [searchValue, setSearchValue] = useState("");
    const pageSize = 4;

    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, [currentPage]);
    useEffect(() => {
        setCurrentPage(1);
        setSearchValue("");
    }, [selectedProf]);

    useEffect(() => {
        setCurrentPage(1);
        setSelectedProf("");
    }, [searchValue]);

    const handleSearchFormStatus = () => {
        setSearchValue(event.target.value);
        console.log(searchValue);
    };

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

    const handleSort = (item) => {
        setSortBy(item);
    };

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

    if (users) {
        const filteredUsers = selectedProf
            ? users.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
            : users;
        const searchedFilteredUsers = users.filter((user) => {
            return user.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        const count = searchValue ? searchedFilteredUsers.length : filteredUsers.length;
        const sortedUsers = _.orderBy(
            searchValue ? searchedFilteredUsers : filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );
        const usersCrop = paginate(searchValue ? searchedFilteredUsers : sortedUsers, currentPage, pageSize);

        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button className="btn btn-secondary mt-2" onClick={clearFilter}>
                            Все профессии
                        </button>
                    </div>
                )}
                {count > 0 && (
                    <div className="d-flex flex-column">
                        <SearchStatus length={count} />
                        <SearchForm onSetStatus={handleSearchFormStatus} />
                        <UserTable
                            users={usersCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                        />

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
    }
    return "Loading right now...";
};

Users.propTypes = {
    users: PropTypes.array
};

export default Users;
