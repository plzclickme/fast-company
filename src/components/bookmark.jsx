import React from "react";

const Bookmark = ({ handleToggleBookMark, status }) => {
  console.log(status, "status");
  // let newArray = status.map((item) => item.isFavorite === true);
  // console.log(newArray, "newArray");
  // console.log(handleToggleBookMark, "handleToggleBookMark");
  // let { isFavorite } = favoriteArray.isFavorite;
  // let newArray = favoriteArray.filter((item) => item.isFavorite === true);
  // console.log("favoriteArray from BOOKMARK", favoriteArray);
  // console.log("favoriteArray from BOOKMARK newArray", newArray);

  const renderButtonText = (status) => {
    let text = "В закладки?";
    if (status) {
      text = "В закладках!";
    }
    return text;
  };

  const renderButtonClasses = (status) => {
    let classes = "btn btn-primary";
    if (status) {
      classes = "btn btn-danger";
    }
    return classes;
  };

  return (
    <button
      className={renderButtonClasses(status)}
      onClick={handleToggleBookMark}
    >
      {renderButtonText(status)}
    </button>
  );
};

export default Bookmark;
