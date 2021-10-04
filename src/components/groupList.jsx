import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    console.log(items);

    const groupListObject = (
        <ul className="list-group">
            {Object.keys(items).map((item) => {
                return (
                    <li
                        key={items[item][valueProperty]}
                        className={
                            "list-group-item" +
                            (items[item] === selectedItem ? " active" : "")
                        }
                        onClick={() => onItemSelect(items[item])}
                        role="button"
                    >
                        {items[item][contentProperty]}
                    </li>
                );
            })}
        </ul>
    ); const groupListArray = (
        <ul className="list-group">
            {items.map((item) => {
                return (
                    <li
                        key={item.valueProperty}
                        className={
                            "list-group-item" +
                            (item.contentProperty === selectedItem
                                ? " active"
                                : "")
                        }
                        onClick={() => onItemSelect(item)}
                        role="button"
                    >
                        {item}
                    </li>
                );
            })}
        </ul>
    );
    const groupList = Array.isArray(items) ? groupListArray : groupListObject;

    return (groupList);
};
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
