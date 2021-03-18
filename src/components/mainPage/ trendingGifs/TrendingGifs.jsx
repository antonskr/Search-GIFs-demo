import React from "react";
import s from "../mainPage.module.css";
import Preloader from "../../../assets/preloader/Preloader/Preloader";
import SubShare from "../../subShare/SubShare";

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
            <img className={s.images} src={d.images.downsized.url} alt="" />
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
    </div>
  );
};

export default TrendingGifs;
