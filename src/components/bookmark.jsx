import React from "react";

const Bookmark = ({ user, handleToggleBookmark }) => {
  return (
    <button
      onClick={() => handleToggleBookmark(user._id)}
      className="btn btn-primary"
    >
      <i
        className={user.bookmark ? "bi bi-bookmark" : "bi bi-bookmark-fill"}
      ></i>
    </button>
  );
};

export default Bookmark;
