import React from "react";
import s from "./mainPage.module.css";
import form from "../searchForm/SearchForm.module.css";
import TrendingGifs from "./trendingGifs/TrendingGifs";
import SearchGifs from "./searchGifs/SearchGifs";
import GifCategories from "./gifCategories/GifCategories";
import AddSearchFormRedux from "../searchForm/SearchForm";
import ShowMore from "./showMore/ShowMore";

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
  showDetails,
  setUpdateDetails,
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
      {!isActive ? <ShowMore updateTotalCount={updateTotalCount} /> : null}
      <SearchGifs
        preload={preload}
        dataSearch={dataSearch}
        deleteCurrentGif={deleteCurrentGif}
        totalCount={totalCount}
        showDetails={showDetails}
        setUpdateDetails={setUpdateDetails}
      />
      <TrendingGifs
        preload={preload}
        data={data}
        showDetails={showDetails}
        setUpdateDetails={setUpdateDetails}
      />
    </div>
  );
};
export default MainPage;
