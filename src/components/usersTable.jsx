import React from "react";
import PropTypes from "prop-types";
import Bookmark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";

const UserTable = ({ users, handleDelete, handleToggleBookmark, selectedSort, onSort }) => {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: { name: "Качества", component: (user) => <QualitiesList user={user} /> },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => <Bookmark user={user} handleToggleBookmark={handleToggleBookmark} />
        },
        delete: {
            component: (user) => (
                <button onClick={() => handleDelete(user._id)} className="btn-danger">
                    delete
                </button>
            )
        }
    };

    return <Table onSort={onSort} selectedSort={selectedSort} columns={columns} data={users} />;
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggleBookmark: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};

export default UserTable;
