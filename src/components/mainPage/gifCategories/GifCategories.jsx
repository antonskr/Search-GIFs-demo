import React from "react";
import Categories from "./Categories";

const GifCategories = ({ setCategoriesSearchGif }) => {
  return (
    <>
      <Categories
        setCategoriesSearchGif={setCategoriesSearchGif}
        category="Смешные"
      />
      <Categories
        setCategoriesSearchGif={setCategoriesSearchGif}
        category="Мемы"
      />
      <Categories
        setCategoriesSearchGif={setCategoriesSearchGif}
        category="Животные"
      />
    </>
  );
};

export default GifCategories;
