import React from "react";
import s from "./mainPage.module.css";
import form from "../searchForm/SearchForm.module.css";
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
  deleteCurrentGif,
  totalCount,
  updateTotalCount,
  isActive,
}) => {
  const AddNewMessage = (values) => {
    searchGif(values);
  };

  return (
    <div className={s.wrapper}>
      <GifCategories setCategoriesSearchGif={setCategoriesSearchGif} />
      <div className={form.searchFormWrapper}>
        <AddSearchFormRedux
          onSubmit={(values) => {
            AddNewMessage(values.textField);
          }}
          updateTotalCount={updateTotalCount}
          isActive={isActive}
        />
      </div>
      <SearchGifs
        preload={preload}
        dataSearch={dataSearch}
        deleteCurrentGif={deleteCurrentGif}
        totalCount={totalCount}
      />

      <TrendingGifs preload={preload} data={data} />
    </div>
  );
};
export default MainPage;