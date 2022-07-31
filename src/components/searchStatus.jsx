import React from "react";

const SearchStatus = ({ length }) => {
  if (length >= 2 && length <= 4)
    return (
      <span className="btn btn-primary btn-sm m-3">
        {length} человека тусанут с тобой сегодня!
      </span>
    );
  if (length === 0)
    return (
      <span className="btn btn-danger btn-lg m-3">
        НИКТО НЕ тусанет с тобой сегодня!
      </span>
    );
  return (
    <span className="btn btn-primary btn-sm m-3">
      {length} человек тусанет с тобой сегодня!
    </span>
  );
};

export default SearchStatus;
