import React from "react";
import s from "./gifsDetails.module.css";
import SubShare from "../subShare/SubShare";

const GifsDetails = ({ showDetails, setUpdateDetails }) => {
  const { data } = showDetails;
  return (
    <div
      className={s.GifsDetailsBlock}
      style={{ display: showDetails.display }}
    >
      {data.length === 0 ? null : (
        <div className={s.wrapper}>
          <div className={s.imageBlock}>
            <img src={data.images.original.url} alt="/" />
            <button
              className={s.hideDetailsBtn}
              type="button"
              onClick={() => {
                setUpdateDetails({ display: "none", data });
              }}
            >
              &#10006;
            </button>
            <div className={s.descrition}>
              <div className={s.subShare}>
                <SubShare url={data.url} />
              </div>
              <p> {data.username ? data.username : null} </p>
              <p> {data.title ? data.title : null} </p>
              <p>
                {data.trending_datetime
                  ? ` trending datetime ${data.trending_datetime}`
                  : null}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GifsDetails;
