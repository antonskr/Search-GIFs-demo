import React from "react";
import Preloader from "../../../assets/preloader/Preloader/Preloader";
import s from "../mainPage.module.css";
import SubShare from "../../subShare/SubShare";

// eslint-disable-next-line no-unused-vars
const SearchGifs = ({ dataSearch, preload, deleteCurrentGif, totalCount }) => {
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
              <img className={s.images} src={d.images.original.url} alt="" />
              <div className={s.descriptionBlock}>
                <button type="button" onClick={() => deleteCurrentGif(d.id)}>
                  &#10006;
                </button>
                <SubShare urlGif={d.images.original.url} />
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
    </div>
  );
};

export default SearchGifs;
