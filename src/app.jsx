import React, { useState, useEffect } from "react";
import Users from "./components/users";
import API from "./API";

const App = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const allUsers = users ? setUsers() : "";
    const handleDelete = (userId) => {
        setUsers(
            allUsers.filter((item) => {
                return item._id !== userId;
            })
        );
    };
    const handleToggleBookmark = (id) => {
        setUsers(
            allUsers.map((user) => {
                if (user._id === id) {
                    user.bookmark = !user.bookmark;
                }
                return user;
            })
        );
    };

    return (
        <>
            <Users
                users={users}
                handleDelete={handleDelete}
                handleToggleBookmark={handleToggleBookmark}
            />
        </>
    );
};

export default App;
