import React, { useState } from "react";
import API from "../API";

const Users = () => {
  let [users, setUsers] = useState(API.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(
      (users = users.filter((item) => {
        return item._id !== userId;
      }))
    );
  };
  const renderPhrase = (number) => {
    if (number === 0) {
      const elem = document.querySelector(".table");
      elem.innerHTML = "";
      return (
        <span key={number} className="badge bg-danger">
          Никто с тобой не тусанет
        </span>
      );
    }
    if (number > 4 || number === 1)
      return (
        <span key={number} className="badge bg-primary">
          {number} человек тусанет с тобой сегодня
        </span>
      );
    return (
      <span key={number} className="badge bg-primary">
        {number} человека тусанет с тобой сегодня
      </span>
    );
  };
  const renderTableRow = () => {
    return users.map((user) => {
      return (
        <tr id={user._id}>
          <td>{user.name}</td>
          <td>
            {user.qualities.map((quality) => {
              let classes = "badge m-1 bg-" + quality.color;
              return <span className={classes}>{quality.name}</span>;
            })}
          </td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}/5</td>
          <td>
            <button
              onClick={() => handleDelete(user._id)}
              className="btn-danger"
            >
              delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      {renderPhrase(users.length)}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{renderTableRow()}</tbody>
      </table>
    </>
  );
};

export default Users;
