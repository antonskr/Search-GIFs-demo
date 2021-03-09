import React from "react";
import Preloader from "../../../assets/preloader/Preloader/Preloader";
import s from "../mainPage.module.css";

const SearchGifs = (props) => {
    return (
        <div>
            {props.preload === true ? <Preloader/> : !props.dataSearch.length ? null :
                props.dataSearch.reverse().map(d => <span className={s.imageBlock} key={d.id}>
                        <img className={s.images} src={d.images.original.url} alt=""/>
                        <div className={s.descriptionBlock}>
                                <p className={s.username}>{`Created by  ${d.username}`}</p>
                                <p className={s.descripton}> {d.title} </p>
                            </div>
                    </span>)}
        </div>
    )
}

export default SearchGifs