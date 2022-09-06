import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    //console.log(selectedSort.path, "selectedSort.path");

    const strelkaSortRender = (item) => {
        if (selectedSort.path === item && selectedSort.order === "asc") {
            return <i className="bi bi-caret-down-fill"></i>;
        } else if (selectedSort.path === item) {
            return <i className="bi bi-caret-up-fill"></i>;
        }
    };

    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
        //console.log("item", item);
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={columns[column].path ? () => handleSort(columns[column].path) : undefined}
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        {columns[column].path !== undefined ? strelkaSortRender(columns[column].path) : undefined}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
