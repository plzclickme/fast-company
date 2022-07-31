import React from "react";
import User from "./user";

const Users = (props) => {
  const userArray = props.userArray;
  // const favoriteArray = props.favoriteArray;
  // console.log("props from users favoriteArray", favoriteArray);
  // console.log("props from users", props);
  // console.log(userArray);
  return (
    <>
      {userArray.length > 0 && (
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
            <User users={props} />
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
