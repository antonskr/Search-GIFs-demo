import React from "react";
import svg from "./Preloader.svg";
import s from "./preloader.module.css";

const Preloader = () => {
  return (
    <div>
      <img className={s.Preloader} src={svg} alt="Preloader" />
    </div>
  );
};

export default Preloader;
