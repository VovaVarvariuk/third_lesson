import React, { useState, useEffect } from "react";
import Users from "./components/users";
import API from "./API";

const App = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

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
                if (user._id === id) {
                    user.bookmark = !user.bookmark;
                }
                return user;
            })
        );
    };

    return (
        <>
            {users && (
                <Users
                    users={users}
                    handleDelete={handleDelete}
                    handleToggleBookmark={handleToggleBookmark}
                />
            )}
        </>
    );
};

export default App;
