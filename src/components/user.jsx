import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = (props) => {
  const { userArray } = props.users;
  const status = props.users.status;
  console.log("props from User status", status);
  // const { favoriteArray } = props;
  console.log("props from User userArray", userArray);
  // console.log("props from User favoriteArray", favoriteArray);
  return userArray.map((user) => (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td key={user._id}>
        {user.qualities.map((item) => (
          <Qualitie color={item.color} name={item.name} _id={item._id} />
        ))}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}/5</td>
      <td>
        {/* {status.map((item) => ( */}
        <Bookmark
          status={status}
          handleToggleBookMark={() =>
            props.users.handleToggleBookMark(user._id)
          }
        />
        {/* // ))} */}
      </td>
      <td>
        <button
          onClick={() => props.users.handleDelete(user._id)}
          className="btn btn-danger"
        >
          delete
        </button>
      </td>
    </tr>
  ));
};

export default User;
