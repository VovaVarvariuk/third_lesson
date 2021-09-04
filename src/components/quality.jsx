import React from "react";

const Quality = ({ user }) => {
  return user.qualities.map((quality) => {
    let classes = "badge m-1 bg-" + quality.color;
    return (
      <span key={quality.id} className={classes}>
        {quality.name}
      </span>
    );
  });
};

export default Quality;
