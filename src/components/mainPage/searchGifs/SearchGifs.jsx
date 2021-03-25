import React from "react";
import Preloader from "../../../assets/preloader/Preloader/Preloader";
import s from "../mainPage.module.css";
import SubShare from "../../subShare/SubShare";
import GifsDetails from "../../gifsDetails/GifsDeatails";

const SearchGifs = ({
  dataSearch,
  preload,
  deleteCurrentGif,
  totalCount,
  setUpdateDetails,
  showDetails,
}) => {
  return (
    <div>
      {preload ? (
        <div className={s.preloaderBlock}>
          <Preloader />
        </div>
      ) : (
        dataSearch
          .slice(0, totalCount)
          .reverse()
          .map((d) => (
            <span className={s.imageBlock} key={d.id}>
              {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events */}
              <img
                className={s.images}
                src={d.images.original.url}
                alt=""
                onClick={() => {
                  setUpdateDetails({
                    display: "block",
                    data: d,
                    location: "searchGifs",
                  });
                }}
              />
              <div className={s.descriptionBlock}>
                <button type="button" onClick={() => deleteCurrentGif(d.id)}>
                  &#10006;
                </button>
                <SubShare url={d.images.original.url} />
                <p className={s.username}>
                  {d.username
                    ? `Created by ${d.username}`
                    : "Created by unknown"}
                </p>
                <p className={s.descripton}> {d.title} </p>
              </div>
            </span>
          ))
      )}
      {showDetails.location === "searchGifs" ? (
        <GifsDetails
          showDetails={showDetails}
          setUpdateDetails={setUpdateDetails}
        />
      ) : null}
    </div>
  );
};

export default SearchGifs;
