import React from "react";

const SearchStatus = ({ length }) => {
  if (length === 0) {
    const elem = document.querySelector(".table");
    elem.innerHTML = "";
    return (
      <span key={length} className="badge bg-danger">
        Никто с тобой не тусанет
      </span>
    );
  }
  if (length > 4 || length === 1)
    return (
      <span key={length} className="badge bg-primary">
        {length} человек тусанет с тобой сегодня
      </span>
    );
  return (
    <span key={length} className="badge bg-primary">
      {length} человека тусанет с тобой сегодня
    </span>
  );
};

export default SearchStatus;