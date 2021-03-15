import React from "react";
import { TelegramShareButton, TelegramIcon } from "react-share";
import s from "./SubShare.module.css";

const SubShare = ({ url }) => {
  return (
    <div className={s.subShareItem}>
      <TelegramShareButton url={url}>
        <TelegramIcon size="2rem" />
      </TelegramShareButton>
    </div>
  );
};

export default SubShare;
