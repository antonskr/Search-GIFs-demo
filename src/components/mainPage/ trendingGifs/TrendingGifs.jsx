import React from "react";
import s from "../mainPage.module.css";
import Preloader from "../../../assets/preloader/Preloader/Preloader";

const TrendingGifs = ({ data, preload }) => {
  return (
    <div className={s.GifWrapper}>
      {preload && !data.length ? (
        <div className={s.preloaderBlock}>
          <Preloader />
        </div>
      ) : (
        data.map((d) => (
          <span className={s.imageBlock} key={d.id}>
            <div>
              <img className={s.images} src={d.images.original.url} alt="" />
              <div className={s.descriptionBlock}>
                <p className={s.username}>
                  {d.username
                    ? `Created by ${d.username}`
                    : "Created by unknown"}
                </p>
                <p className={s.descripton}> {d.title} </p>
              </div>
            </div>
          </span>
        ))
      )}
    </div>
  );
};

export default TrendingGifs;
