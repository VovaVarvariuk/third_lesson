import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    if (length === 0) {
        const elem = document.querySelector(".table");
        elem.innerHTML = "";
        return (
            <span key={length} className="badge bg-danger m-1">
                Никто с тобой не тусанет
            </span>
        );
    }
    if (length > 4 || length === 1) {
        return (
            <span key={length} className="badge bg-primary m-1">
                {length} человек тусанет с тобой сегодня
            </span>
        );
    } else {
        return (
            <span key={length} className="badge bg-primary m-1">
                {length} человека тусанет с тобой сегодня
            </span>
        );
    }
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
