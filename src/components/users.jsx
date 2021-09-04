import React from "react";
import User from "./user";

const Users = ({ users, handleDelete, handleToggleBookmark }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <User
            users={users}
            handleDelete={handleDelete}
            handleToggleBookmark={handleToggleBookmark}
          />
        </tbody>
      </table>
    </>
  );
};

export default Users;
