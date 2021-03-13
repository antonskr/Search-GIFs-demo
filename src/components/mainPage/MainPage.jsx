import React from "react";
import s from "./mainPage.module.css";
import TrendingGifs from "./ trendingGifs/TrendingGifs";
import SearchGifs from "./searchGifs/SearchGifs";
import GifCategories from "./gifCategories/GifCategories";
import AddSearchFormRedux from "../searchForm/SearchForm";

const MainPage = ({
  data,
  dataSearch,
  preload,
  searchGif,
  setCategoriesSearchGif,
}) => {
  const AddNewMessage = (values) => {
    searchGif(values);
  };

  return (
    <div className={s.wrapper}>
      <GifCategories setCategoriesSearchGif={setCategoriesSearchGif} />
      <span>
        <AddSearchFormRedux
          onSubmit={(values) => {
            AddNewMessage(values.textField);
          }}
        />
      </span>
      <SearchGifs preload={preload} dataSearch={dataSearch} />

      <TrendingGifs preload={preload} data={data} />
    </div>
  );
};
export default MainPage;
