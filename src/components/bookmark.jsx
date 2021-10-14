import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ user, handleToggleBookmark }) => {
    return (
        <button onClick={() => handleToggleBookmark(user._id)} className="btn btn-primary">
            <i className={user.bookmark ? "bi bi-bookmark" : "bi bi-bookmark-fill"}></i>
        </button>
    );
};

Bookmark.propTypes = {
    user: PropTypes.object.isRequired,
    handleToggleBookmark: PropTypes.func.isRequired
};

export default Bookmark;
