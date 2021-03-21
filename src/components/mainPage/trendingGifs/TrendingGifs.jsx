import React from "react";
import s from "../mainPage.module.css";
import Preloader from "../../../assets/preloader/Preloader/Preloader";
import SubShare from "../../subShare/SubShare";
import GifsDetails from "../../gifsDetails/GifsDeatails";

const TrendingGifs = ({ data, preload, showDetails, setUpdateDetails }) => {
  return (
    <div className={s.GifWrapper}>
      {preload && !data.length ? (
        <div className={s.preloaderBlock}>
          <Preloader />
        </div>
      ) : (
        data.map((d) => (
          <span className={s.imageBlock} key={d.id}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <img
              onClick={() => {
                setUpdateDetails({
                  display: "block",
                  data: d,
                  page: "trendingPage",
                });
              }}
              className={s.images}
              src={d.images.downsized.url}
              alt=""
            />
            <div className={s.descriptionBlock}>
              <SubShare url={d.images.original.url} />
              <p className={s.username}>
                {d.username ? `Created by ${d.username}` : "Created by unknown"}
              </p>
              <p className={s.descripton}> {d.title} </p>
            </div>
          </span>
        ))
      )}
      {showDetails.page === "trendingPage" ? (
        <GifsDetails
          showDetails={showDetails}
          setUpdateDetails={setUpdateDetails}
        />
      ) : null}
    </div>
  );
};

export default TrendingGifs;
