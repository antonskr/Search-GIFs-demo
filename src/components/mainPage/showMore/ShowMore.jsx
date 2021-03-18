import React from "react";
import s from "../../searchForm/SearchForm.module.css";

const ShowMore = ({ updateTotalCount }) => {
  return (
    <div>
      <button
        className={s.showMoreBtn}
        type="button"
        onClick={updateTotalCount}
      >
        Показать ещё
      </button>
    </div>
  );
};

export default ShowMore;
