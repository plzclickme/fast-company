import React, { useState } from "react";
import Users from "./users";
import SearchStatus from "./searchStatus";
import API from "../api";

function App() {
  const [users, setUsers] = useState(API.users.fetchAll());
  const [favorite, setFavorite] = useState(false);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleToggleBookMark = (id) => {
    console.log(id);
    let isFavorite = false;
    setFavorite((prevState) => !prevState);
    console.log(favorite);
    // return favorite;

    // setFavorite([...favorite, { id: id, isFavorite: true }]);
    // console.log("favorite", favorite);
  };

  return (
    <>
      <SearchStatus length={users.length} />
      <Users
        userArray={users}
        status={favorite}
        handleDelete={handleDelete}
        handleToggleBookMark={handleToggleBookMark}
      />
      ;
    </>
  );
}

export default App;
