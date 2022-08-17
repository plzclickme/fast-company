import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items, valueProperty, contentProperty, onItemSelect, selectedItem }) => {
    const forArrayFunc = (items) => {
        return (
            items && (
                <ul className="list-group">
                    {items.map((item) => (
                        <li
                            key={item[valueProperty]}
                            className={"list-group-item" + (item === selectedItem ? " active" : "")}
                            onClick={() => onItemSelect(item)}
                            role="button"
                        >
                            {item[contentProperty]}
                        </li>
                    ))}
                </ul>
            )
        );
    };
    const forObjectFunc = (items) => {
        return (
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        key={[item][items][valueProperty]}
                        className={"list-group-item" + ([item][items] === selectedItem ? " active" : "")}
                        onClick={() => onItemSelect([item][items])}
                        role="button"
                    >
                        {[item][items][contentProperty]}
                    </li>
                ))}
            </ul>
        );
    };
    //console.log(Object.keys(items));
    return items && Array.isArray(items) ? forArrayFunc(items) : forObjectFunc(items);
};
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
GroupList.propTypes = {
    items: PropTypes.oneOfType(PropTypes.object, PropTypes.array),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
