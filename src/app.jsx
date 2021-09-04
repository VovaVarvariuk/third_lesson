import React, { useState } from "react";
import Users from "./components/users";
import API from "./API";
import SearchStatus from "./components/searchStatus";

const App = () => {
  let [users, setUsers] = useState(API.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(
      users.filter((item) => {
        return item._id !== userId;
      })
    );
  };
  const handleToggleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id && user.bookmark === true) {
          user.bookmark = false;
        } else if (user._id === id) {
          user.bookmark = true;
        }
        return user;
      })
    );
  };

  return (
    <>
      <SearchStatus length={users.length} />
      <Users
        users={users}
        handleDelete={handleDelete}
        handleToggleBookmark={handleToggleBookmark}
      />
    </>
  );
};

export default App;