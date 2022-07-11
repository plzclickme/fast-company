import React from "react";
import { useState } from "react";
import API from "../api";
import "bootstrap/dist/css/bootstrap.css";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  console.log(users);

  const handleDelete = (id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== id));
    console.log("handleDelete", id);
  };

  const renderPhrase = (number) => {
    if (number >= 2 && number <= 4)
      return (
        <span className="btn btn-primary btn-sm m-3">
          {number} человека тусанут с тобой сегодня!
        </span>
      );
    if (number === 0)
      return (
        <span className="btn btn-danger btn-lg m-3">
          НИКТО НЕ тусанет с тобой сегодня!
        </span>
      );
    return (
      <span className="btn btn-primary btn-sm m-3">
        {number} человек тусанет с тобой сегодня!
      </span>
    );
  };

  const renderUsersTable = () => {
    const TB = () => {
      return users.map((user) => (
        <tr key={user._id}>
          <th scope="row">{user.name}</th>
          <td>
            {user.qualities.map((item) => (
              <span key={item._id} className={"m-2 badge bg-" + item.color}>
                {item.name}
              </span>
            ))}
          </td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}</td>
          <td>
            <button
              className="badge bg-danger m-1"
              onClick={() => handleDelete(user._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ));
    };
    if (users.length > 0)
      return (
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{TB()}</tbody>;
        </table>
      );
  };

  return (
    <>
      <div>{renderPhrase(users.length)}</div>
      {renderUsersTable()}
    </>
  );
};

export default Users;
