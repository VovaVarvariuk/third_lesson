import React from "react";
import PropTypes from "prop-types";

const QualitiesList = ({ user }) => {
    return user.qualities.map((quality) => {
        const classes = "badge m-1 bg-" + quality.color;
        return (
            <span key={quality.id} className={classes}>
                {quality.name}
            </span>
        );
    });
};

QualitiesList.propTypes = {
    user: PropTypes.object.isRequired
};

export default QualitiesList;
