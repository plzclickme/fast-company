import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ onSetStatus, placeholder = "Search here..." }) => {
    return (
        <input
            className="form-control"
            type="text"
            placeholder={placeholder}
            aria-label="default input example"
            onChange={onSetStatus}
        ></input>
    );
};
SearchForm.propTypes = {
    onSetStatus: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};
export default SearchForm;

//const [searchValue, setSearchValue] = useState("");
//const searchedFilteredUsers = users.filter((user) => {
//    return user.name.toLowerCase().includes(searchValue.toLowerCase());
//});

//const handleSearchFormStatus = () => {
//    setSearchValue(event.target.value);
//    console.log(searchValue);
//};
