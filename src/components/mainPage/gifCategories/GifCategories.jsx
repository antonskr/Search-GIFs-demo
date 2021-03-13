import React from "react";
import s from "./GigCategories.module.css";

const GifCategories = ({ setCategoriesSearchGif }) => {
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
          Смешные
        </button>
      </div>
      <div>
        <button
          type="button"
          className={s.GifCategoriesBtn}
          onClick={(e) => {
            setCategoriesSearchGif(e.currentTarget.innerText);
          }}
        >
          Мемы
        </button>
      </div>
      <div>
        <button
          type="button"
          className={s.GifCategoriesBtn}
          onClick={(e) => {
            setCategoriesSearchGif(e.currentTarget.innerText);
          }}
        >
          Животные
        </button>
      </div>
    </div>
  );
};

export default GifCategories;
