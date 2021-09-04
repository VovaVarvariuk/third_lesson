import React from "react";
import Quality from "./quality";
import Bookmark from "./bookmark";

const User = ({ users, handleDelete, handleToggleBookmark }) => {
  return users.map((user) => {
    return (
      <tr id={user._id}>
        <td>{user.name}</td>
        <td>
          <Quality user={user} />
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}/5</td>
        <td>
          <Bookmark user={user} handleToggleBookmark={handleToggleBookmark} />
        </td>
        <td>
          <button onClick={() => handleDelete(user._id)} className="btn-danger">
            delete
          </button>
        </td>
      </tr>
    );
  });
};

export default User;
