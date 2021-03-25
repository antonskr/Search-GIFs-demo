import React from "react";
import s from "./GifCategories.module.css";

const Categories = ({ setCategoriesSearchGif, category }) => {
  return (
    <div className={s.categoriesWrapper}>
      <div>
        <button
          type="button"
          className={s.GifCategoriesBtn}
          onClick={(e) => {
            setCategoriesSearchGif(e.currentTarget.innerText);
          }}
        >
          {category}
        </button>
      </div>
    </div>
  );
};

export default Categories;
